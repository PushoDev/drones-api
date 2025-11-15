import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMedicationDto } from './dto/create-medication.dto';
import { UpdateMedicationDto } from './dto/update-medication.dto';
import { Medication } from './entities/medication.entity';

@Injectable()
export class MedicationsService {
  constructor(
    @InjectRepository(Medication)
    private medicationsRepository: Repository<Medication>,
  ) {}

  async create(createMedicationDto: CreateMedicationDto): Promise<Medication> {
    const medication = this.medicationsRepository.create(createMedicationDto);
    return this.medicationsRepository.save(medication);
  }

  async findAll(): Promise<Medication[]> {
    return this.medicationsRepository.find();
  }

  async findOne(id: number): Promise<Medication> {
    const medication = await this.medicationsRepository.findOne({ where: { id } });
    if (!medication) {
      throw new NotFoundException(`Medication with ID ${id} not found`);
    }
    return medication;
  }

  async update(id: number, updateMedicationDto: UpdateMedicationDto): Promise<Medication> {
    const medication = await this.findOne(id);
    this.medicationsRepository.merge(medication, updateMedicationDto);
    return this.medicationsRepository.save(medication);
  }

  async remove(id: number): Promise<void> {
    const medication = await this.findOne(id);
    await this.medicationsRepository.remove(medication);
  }
}