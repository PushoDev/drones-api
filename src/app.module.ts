import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Drone } from './drones/entities/drone.entity';
import { Medication } from './medications/entities/medication.entity';
import { Audit } from './audit/entities/audit.entity';
import { DronesModule } from './drones/drones.module';
import { MedicationsModule } from './medications/medications.module';
import { DroneMedicationsModule } from './drone-medications/drone-medications.module';
import { AuditModule } from './audit/audit.module';
import { CronModule } from './cron/cron.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Drone, Medication, Audit],
      synchronize: false, // Disabled to avoid conflicts with existing data
    }),
    DronesModule,
    MedicationsModule,
    DroneMedicationsModule,
    AuditModule,
    CronModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
