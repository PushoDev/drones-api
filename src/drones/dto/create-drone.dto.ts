import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { DroneModel, DroneState } from '../entities/drone.entity';

export class CreateDroneDto {
  @IsString()
  @IsNotEmpty()
  serialNumber: string;

  @IsEnum(DroneModel)
  @IsNotEmpty()
  model: DroneModel;

  @IsEnum(DroneState)
  @IsNotEmpty()
  state: DroneState;

  @IsNumber()
  @IsInt()
  @Min(0)
  @Max(100)
  @IsNotEmpty()
  batteryLevel: number; // percentage
}
