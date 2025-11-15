-- Database initialization script for Drones API
-- This script creates the necessary tables for the drones API

-- Create the drones table
CREATE TABLE IF NOT EXISTS drones (
    id SERIAL PRIMARY KEY,
    serial_number VARCHAR(100) UNIQUE NOT NULL,
    model VARCHAR(50) NOT NULL,
    state VARCHAR(20) DEFAULT 'IDLE',
    battery_level INTEGER DEFAULT 100 CHECK (battery_level >= 0 AND battery_level <= 100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the medications table
CREATE TABLE IF NOT EXISTS medications (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    weight DECIMAL(10,2) NOT NULL,
    code VARCHAR(50) NOT NULL UNIQUE,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the drone_medications junction table to handle the many-to-many relationship
CREATE TABLE IF NOT EXISTS drone_medications (
    id SERIAL PRIMARY KEY,
    drone_id INTEGER REFERENCES drones(id) ON DELETE CASCADE,
    medication_id INTEGER REFERENCES medications(id) ON DELETE CASCADE,
    quantity INTEGER DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(drone_id, medication_id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_drones_serial ON drones(serial_number);
CREATE INDEX IF NOT EXISTS idx_drones_state ON drones(state);
CREATE INDEX IF NOT EXISTS idx_medications_code ON medications(code);

-- Insert sample data for testing
INSERT INTO drones (serial_number, model, state, battery_level) VALUES 
('D001', 'Lightweight', 'IDLE', 100),
('D002', 'Middleweight', 'LOADING', 85),
('D003', 'Cruiserweight', 'LOADED', 90),
('D004', 'Heavyweight', 'DELIVERING', 75),
('D005', 'Lightweight', 'DELIVERED', 30)
ON CONFLICT (serial_number) DO NOTHING;

INSERT INTO medications (name, weight, code, image_url) VALUES
('Aspirin', 0.5, 'ASPR_001', 'https://example.com/aspirin.jpg'),
('Ibuprofen', 0.3, 'IBUP_002', 'https://example.com/ibuprofen.jpg'),
('Vitamin C', 0.2, 'VITC_003', 'https://example.com/vitamin_c.jpg'),
('Amoxicillin', 0.4, 'AMOX_004', 'https://example.com/amoxicillin.jpg')
ON CONFLICT (code) DO NOTHING;

INSERT INTO drone_medications (drone_id, medication_id, quantity) VALUES
(1, 1, 10),  -- D001 carries 10 Aspirin
(2, 2, 5),   -- D002 carries 5 Ibuprofen
(3, 3, 20),  -- D003 carries 20 Vitamin C
(4, 4, 8)    -- D004 carries 8 Amoxicillin
ON CONFLICT (drone_id, medication_id) DO NOTHING;

-- Update the updated_at timestamp when records are modified
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_drones_updated_at BEFORE UPDATE ON drones FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_medications_updated_at BEFORE UPDATE ON medications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();