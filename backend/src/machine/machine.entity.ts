import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'machines' }) // Nombre de la tabla en la BD
export class MachineEntity {
  @PrimaryGeneratedColumn()
  id: number; // Clave primaria autoincrementable

  @Column({ type: 'varchar', length: 100 })
  name: string; // Nombre de la máquina

  @Column({ type: 'varchar', length: 50 })
  model: string; // Modelo de la máquina

  @Column({ type: 'varchar', length: 255, unique: true })
  serialNumber: string; // Número de serie (único)

  @Column({ type: 'enum', enum: ['ACTIVE', 'INACTIVE', 'MAINTENANCE'], default: 'ACTIVE' })
  status: string; // Estado de la máquina (usando ENUM)

  @Column({ type: 'varchar', length: 255, nullable: true })
  location?: string; // Ubicación de la máquina (opcional)

  @CreateDateColumn()
  createdAt: Date; // Fecha de creación (se genera automáticamente)

  @UpdateDateColumn()
  updatedAt: Date; // Fecha de actualización (se actualiza automáticamente)
}
