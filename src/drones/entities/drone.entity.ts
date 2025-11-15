
import { Medication } from 'src/medications/entities/medication.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

@Entity()
export class Drone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, unique: true })
  serialNumber: string;

  @Column({
    type: 'enum',
    enum: DroneModel,
  })
  model: DroneModel;

  @Column()
  weightLimit: number;

  @Column()
  batteryCapacity: number;

  @Column({
    type: 'enum',
    enum: DroneState,
    default: DroneState.IDLE,
  })
  state: DroneState;

  @OneToMany(() => Medication, (medication) => medication.drone)
  medications: Medication[];
}
