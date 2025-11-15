<div align="right">
  <kbd><a href="README.md"><img title="Español" alt="Español" src="https://cdn.statically.io/gh/hjnilsson/country-flags/master/svg/es.svg" width="22"></a></kbd>
  <kbd><a href="README.en.md"><img title="English" alt="English" src="https://cdn.statically.io/gh/hjnilsson/country-flags/master/svg/us.svg" width="22"></a></kbd>
</div>

# Drones API

[![Stars](https://img.shields.io/github/stars/PushoDev/drones-api?style=social)](https://github.com/PushoDev/drones-api)

REST API for managing medical delivery drones. This project allows managing drones, medications and their relationships, including features for loading medications onto drones, checking battery status, and more.

## 🚀 Features

- **Complete drone management**: CRUD for drones with different models and states
- **Medication management**: CRUD for medications with unique codes
- **Medication assignment**: System for assigning medications to drones
- **Status tracking**: Monitoring drone states (IDLE, LOADING, LOADED, DELIVERING, DELIVERED, RETURNING)
- **Battery validation**: Battery level control (0-100%)

## 🛠️ Technologies Used

- **NestJS** - Node.js framework
- **TypeScript** - Programming language
- **PostgreSQL** - Relational database
- **TypeORM** - Database ORM
- **Docker** - Containerization
- **Adminer** - Database administration interface

## 📋 Prerequisites

- Node.js 16+
- Docker and Docker Compose
- PostgreSQL (provided via Docker)

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/PushoDev/drones-api.git
```

2. Install dependencies:
```bash
cd drones-api
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

4. Start services with Docker:
```bash
docker-compose up -d
```

5. Start the application:
```bash
npm run start:dev
```

## 📡 Available Endpoints

### Drones
- `GET /drones` - List all drones
- `POST /drones` - Create a new drone
- `GET /drones/:id` - Get a specific drone
- `PATCH /drones/:id` - Update a drone
- `DELETE /drones/:id` - Delete a drone

### Medications
- `GET /medications` - List all medications
- `POST /medications` - Create a new medication
- `GET /medications/:id` - Get a specific medication
- `PATCH /medications/:id` - Update a medication
- `DELETE /medications/:id` - Delete a medication

### Medication assignment to drones
- `POST /drone-medications/:droneId/medications/:medicationId` - Assign a medication to a drone
- `GET /drone-medications/:droneId/medications` - Get medications for a drone
- `DELETE /drone-medications/:droneId/medications/:medicationId` - Remove a medication from a drone

## 📊 Database Diagram

```text
Drones (drones) --< Drone_Medications >-- Medications (medications)
```

## 🤝 Contributing

Contributions are welcome. Please open an issue or submit a pull request to propose changes.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for more details.