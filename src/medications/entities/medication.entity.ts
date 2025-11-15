import { Drone } from 'src/drones/entities/drone.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinTable } from 'typeorm';

@Entity({ name: 'medications' })
export class Medication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  weight: number;

  @Column({ unique: true })
  code: string;

  @Column({ name: 'image_url', nullable: true })
  imageUrl: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToMany(() => Drone, (drone) => drone.medications)
  @JoinTable({
    name: 'drone_medications', // nombre de la tabla intermedia
    joinColumn: {
      name: 'medication_id', // columna que referencia a esta entidad (medication)
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'drone_id', // columna que referencia a la otra entidad (drone)
      referencedColumnName: 'id',
    },
  })
  drones: Drone[];
}
