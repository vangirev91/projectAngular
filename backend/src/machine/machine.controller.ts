import { Body, Controller, Get, Param, ParseIntPipe, Post , Patch, Delete, UsePipes, ValidationPipe} from '@nestjs/common';
import { MachineService } from './machine.service';
import { MachineDto } from './dto/machine.dto';

@Controller('machine')
export class MachineController {
    constructor(private readonly machineService:MachineService){}

    @Get()
    async findAll(){
        return this.machineService.findAll();
    }
    @Get(':id')
    async getOne(@Param('id',ParseIntPipe) id:number){
        return this.machineService.findById(id);
    }
    @UsePipes(new ValidationPipe())
    @Post()
    async create(@Body() dto:MachineDto){
        return this.machineService.create(dto);
    }
    @Patch(':id')
    async updatePartial(@Param('id',ParseIntPipe) id:number,@Body() dto:Partial<MachineDto>){
        return this.machineService.updatePartial(id,dto);
    }
    @Delete(':id')
    async delete(@Param('id',ParseIntPipe) id:number){
        return this.machineService.delete(id);
    }
}
