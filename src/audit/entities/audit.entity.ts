
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Audit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  droneId: number;

  @Column()
  batteryLevel: number;

  @CreateDateColumn()
  timestamp: Date;
}
