import { Controller, Post, Get, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { DroneMedicationsService } from './drone-medications.service';

@Controller('drone-medications')
export class DroneMedicationsController {
  constructor(private readonly droneMedicationsService: DroneMedicationsService) {}

  @Post(':droneId/medications/:medicationId')
  async assignMedicationToDrone(
    @Param('droneId', ParseIntPipe) droneId: number,
    @Param('medicationId', ParseIntPipe) medicationId: number,
    @Body('quantity') quantity: number,
  ) {
    return this.droneMedicationsService.assignMedicationToDrone(droneId, medicationId, quantity);
  }

  @Get(':droneId/medications')
  async getDroneMedications(@Param('droneId', ParseIntPipe) droneId: number) {
    return this.droneMedicationsService.getDroneMedications(droneId);
  }

  @Delete(':droneId/medications/:medicationId')
  async removeMedicationFromDrone(
    @Param('droneId', ParseIntPipe) droneId: number,
    @Param('medicationId', ParseIntPipe) medicationId: number,
  ) {
    return this.droneMedicationsService.removeMedicationFromDrone(droneId, medicationId);
  }
}