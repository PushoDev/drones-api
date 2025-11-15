import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity({ name: 'audit' })
export class Audit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  action: string;

  @Column({ type: 'text', nullable: true })
  details: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  entity: string;

  @Column({ type: 'int', nullable: true })
  entityId: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}