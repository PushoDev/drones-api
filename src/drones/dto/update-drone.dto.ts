import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsInt, IsNumber, IsOptional, Max, Min } from 'class-validator';
import { DroneModel, DroneState } from '../entities/drone.entity';

export class UpdateDroneDto {
  @ApiPropertyOptional({ description: 'Serial number of the drone', example: 'D001' })
  @IsOptional()
  serialNumber?: string;

  @ApiPropertyOptional({ enum: DroneModel, description: 'Model of the drone' })
  @IsOptional()
  @IsEnum(DroneModel)
  model?: DroneModel;

  @ApiPropertyOptional({ enum: DroneState, description: 'Current state of the drone' })
  @IsOptional()
  @IsEnum(DroneState)
  state?: DroneState;

  @ApiPropertyOptional({ description: 'Battery level percentage (0-100)', minimum: 0, maximum: 100 })
  @IsOptional()
  @IsNumber()
  @IsInt()
  @Min(0)
  @Max(100)
  batteryLevel?: number;
}
