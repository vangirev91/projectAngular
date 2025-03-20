import { Component, OnInit } from '@angular/core';
import { MachineService } from '../services/machine.service';
import { Machine } from '../models/machine';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-machine',
  standalone: false,
  templateUrl: './nuevo-machine.component.html',
  styleUrls: ['./nuevo-machine.component.css']
})
export class NuevoMachineComponent implements OnInit {

  name = '';
  model = '';
  serialNumber = '';
  status = 'ACTIVE'; // Estado por defecto
  location = '';

  constructor(
    private machineService: MachineService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {}

  onCreate(): void {
    const machine = new Machine({
      name: this.name,
      model: this.model,
      serialNumber: this.serialNumber,
      status: this.status as 'ACTIVE' | 'INACTIVE' | 'MAINTENANCE', // 👈 Forzar el tipo
      location: this.location
    });
    this.machineService.createMachine(machine).subscribe(
      data => {
        this.toastr.success('Máquina Creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje || 'Error al crear máquina', 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
