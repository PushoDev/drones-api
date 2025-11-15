
import { Drone } from 'src/drones/entities/drone.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Medication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  weight: number;

  @Column({ unique: true })
  code: string;

  @Column()
  image: string;

  @ManyToOne(() => Drone, (drone) => drone.medications)
  drone: Drone;
}
