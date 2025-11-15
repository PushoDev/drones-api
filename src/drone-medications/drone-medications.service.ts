import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Drone } from '../drones/entities/drone.entity';
import { Medication } from '../medications/entities/medication.entity';

@Injectable()
export class DroneMedicationsService {
  constructor(
    @InjectRepository(Drone)
    private dronesRepository: Repository<Drone>,
    @InjectRepository(Medication)
    private medicationsRepository: Repository<Medication>,
  ) {}

  async assignMedicationToDrone(droneId: number, medicationId: number, quantity: number): Promise<Drone> {
    const drone = await this.dronesRepository.findOne({
      where: { id: droneId },
      relations: ['medications'],
    });
    
    if (!drone) {
      throw new Error(`Drone with ID ${droneId} not found`);
    }
    
    const medication = await this.medicationsRepository.findOne({
      where: { id: medicationId },
    });
    
    if (!medication) {
      throw new Error(`Medication with ID ${medicationId} not found`);
    }

    // Añadir la medición al drone con la cantidad
    // En PostgreSQL, TypeORM manejará la tabla intermedia
    drone.medications = [...(drone.medications || []), medication];
    return this.dronesRepository.save(drone);
  }

  async getDroneMedications(droneId: number) {
    const drone = await this.dronesRepository.findOne({
      where: { id: droneId },
      relations: ['medications'],
    });
    
    if (!drone) {
      throw new Error(`Drone with ID ${droneId} not found`);
    }
    
    return drone.medications;
  }

  async removeMedicationFromDrone(droneId: number, medicationId: number) {
    const drone = await this.dronesRepository.findOne({
      where: { id: droneId },
      relations: ['medications'],
    });
    
    if (!drone) {
      throw new Error(`Drone with ID ${droneId} not found`);
    }
    
    if (!drone.medications) {
      return drone;
    }
    
    // Filtrar el medicamento a eliminar
    drone.medications = drone.medications.filter(med => med.id !== medicationId);
    return this.dronesRepository.save(drone);
  }
}