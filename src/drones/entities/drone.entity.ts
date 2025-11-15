import { Medication } from 'src/medications/entities/medication.entity';
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum DroneModel {
  Lightweight = 'Lightweight',
  Middleweight = 'Middleweight',
  Cruiserweight = 'Cruiserweight',
  Heavyweight = 'Heavyweight',
}

export enum DroneState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  DELIVERING = 'DELIVERING',
  DELIVERED = 'DELIVERED',
  RETURNING = 'RETURNING',
}

@Entity({ name: 'drones' })
export class Drone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'serial_number', length: 100, unique: true })
  serialNumber: string;

  @Column({
    type: 'enum',
    enum: DroneModel,
  })
  model: DroneModel;

  @Column({
    type: 'enum',
    enum: DroneState,
    default: DroneState.IDLE,
  })
  state: DroneState;

  @Column({
    name: 'battery_level',
    type: 'integer',
    default: 100,
    comment: 'Battery level percentage (0-100)'
  })
  batteryLevel: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToMany(() => Medication, (medication) => medication.drones)
  medications: Medication[];
}
