import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDroneDto } from './dto/create-drone.dto';
import { UpdateDroneDto } from './dto/update-drone.dto';
import { Drone } from './entities/drone.entity';

@Injectable()
export class DronesService {
  constructor(
    @InjectRepository(Drone)
    private dronesRepository: Repository<Drone>,
  ) {}

  async create(createDroneDto: CreateDroneDto): Promise<Drone> {
    if (createDroneDto.batteryLevel < 0 || createDroneDto.batteryLevel > 100) {
      throw new Error('Battery level must be between 0 and 100');
    }
    const drone = this.dronesRepository.create(createDroneDto);
    return this.dronesRepository.save(drone);
  }

  async findAll(): Promise<Drone[]> {
    return this.dronesRepository.find();
  }

  async findOne(id: number): Promise<Drone> {
    const drone = await this.dronesRepository.findOne({ where: { id } });
    if (!drone) {
      throw new NotFoundException(`Drone with ID ${id} not found`);
    }
    return drone;
  }

  async update(id: number, updateDroneDto: UpdateDroneDto): Promise<Drone> {
    const drone = await this.findOne(id);
    if (updateDroneDto.batteryLevel !== undefined) {
      if (updateDroneDto.batteryLevel < 0 || updateDroneDto.batteryLevel > 100) {
        throw new Error('Battery level must be between 0 and 100');
      }
    }
    this.dronesRepository.merge(drone, updateDroneDto);
    return this.dronesRepository.save(drone);
  }

  async remove(id: number): Promise<void> {
    const drone = await this.findOne(id);
    await this.dronesRepository.remove(drone);
  }
}
