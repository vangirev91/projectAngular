import { Injectable, NotFoundException,HttpException,HttpStatus, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MachineEntity } from './machine.entity';
import { MachineDto } from './dto/machine.dto';

@Injectable()
export class MachineService {
  constructor(
    @InjectRepository(MachineEntity)
    private readonly machineRepository: Repository<MachineEntity>, // Repositorio inyectado
  ) {}

  async findAll(): Promise<MachineEntity[]> {
    const list = await this.machineRepository.find();
    if(!list.length){
        throw new NotFoundException({message:'La lista de Machine se encuentra vacía'});
    }
    return list;
  }
  async findById(id: number): Promise<MachineEntity>{
    const machine = await this.machineRepository.findOne({ where: { id } });
    if(!machine){
        throw new NotFoundException({message:'La Machine no se encuentra'});
    }
    return machine;
  }
  async findByserialNumber(serialNumber: string): Promise<MachineEntity>{
    const machine = await this.machineRepository.findOne({ where: { serialNumber:serialNumber } });
    return machine;
  }
  async create(dto: MachineDto): Promise<any> {
    try {
      const exist = await this.findByserialNumber(dto.serialNumber);
      if(exist) throw new BadRequestException({ message : `La serie que quiere añadir ya existe en una Machine`});

      const machine = this.machineRepository.create(dto);
      await this.machineRepository.save(machine);
      return { message: `Machine ${machine.name} creada` };
    } catch (error) {
      console.error('Error al crear la máquina:', error);
      throw new HttpException(
        {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Error interno del servidor al crear la máquina',
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  
  async update(id:number, dto: MachineDto): Promise<any> {
    const machine = await this.findById(id);
    dto.name? machine.name = dto.name : machine.name =machine.name;
    dto.model? machine.model = dto.model : machine.model =machine.model;
    dto.serialNumber? machine.serialNumber = dto.serialNumber : machine.serialNumber =machine.serialNumber;
    //dto.status? machine.status = dto.status : machine.status =machine.status;
    dto.location? machine.location = dto.location : machine.location =machine.location;

    await this.machineRepository.save(machine);
    return {mesage:`Machine ${machine.name} actualizada`};
  }
  async updatePartial(id: number, dto: Partial<MachineDto>) {
    const machine = await this.machineRepository.findOne({ where: { id } });
    if (!machine) {
      throw new NotFoundException(`Machine with ID ${id} not found`);
    }
  
    Object.assign(machine, dto); // Solo actualiza los campos enviados
    return this.machineRepository.save(machine);
  }
  
  async delete(id:number): Promise<any> {
    const machine = await this.findById(id);

    if (!machine) {
        throw new NotFoundException(`Machine con id ${id} no se encuentra`);
    }

    await this.machineRepository.delete(id);
    return { message: `Machine ${machine.name} eliminada` }
  }
}
