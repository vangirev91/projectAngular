import { Module } from '@nestjs/common';
import { MachineService } from './machine.service';
import { MachineController } from './machine.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MachineEntity } from './machine.entity';

@Module({
  imports:[TypeOrmModule.forFeature([MachineEntity])],
  providers: [MachineService],
  controllers: [MachineController]
})
export class MachineModule {}
