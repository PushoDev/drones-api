import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsPositive, MaxLength } from 'class-validator';

export class UpdateMedicationDto {
  @ApiPropertyOptional({ description: 'Name of the medication', example: 'Aspirin' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;

  @ApiPropertyOptional({ description: 'Weight of the medication', example: 0.5 })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  weight?: number;

  @ApiPropertyOptional({ description: 'Unique code of the medication', example: 'ASPR_001' })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  code?: string;

  @ApiPropertyOptional({ description: 'Image URL of the medication', example: 'https://example.com/aspirin.jpg' })
  @IsOptional()
  @IsString()
  imageUrl?: string;
}