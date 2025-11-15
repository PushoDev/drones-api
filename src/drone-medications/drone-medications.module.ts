import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drone } from '../drones/entities/drone.entity';
import { Medication } from '../medications/entities/medication.entity';
import { DroneMedicationsService } from './drone-medications.service';
import { DroneMedicationsController } from './drone-medications.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Drone, Medication])],
  controllers: [DroneMedicationsController],
  providers: [DroneMedicationsService],
})
export class DroneMedicationsModule {}