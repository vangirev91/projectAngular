export class Machine {
    id!: number;
    name!: string;
    model!: string;
    serialNumber!: string;
    status!: 'ACTIVE' | 'INACTIVE' | 'MAINTENANCE';
    location?: string;
    createdAt!: Date;
    updatedAt!: Date;
  
    constructor(data?: Partial<Machine>) {
      if (data) {
        Object.assign(this, data);
      }
    }
  }
  