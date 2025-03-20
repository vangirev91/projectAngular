import { IsString, IsOptional, IsEnum, Length, IsNotEmpty, IsUUID } from 'class-validator';

export enum MachineStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  MAINTENANCE = 'MAINTENANCE',
}

export class MachineDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  model: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  serialNumber: string;

  @IsEnum(MachineStatus, { message: 'El estado debe ser ACTIVE, INACTIVE o MAINTENANCE' })
  status: MachineStatus;

  @IsString()
  @IsOptional()
  @Length(1, 255)
  location?: string;
}
