import { Component, OnInit } from '@angular/core';
import { Machine } from '../models/machine';
import { MachineService } from '../services/machine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-machine',
  standalone:false,
  templateUrl: './editar-machine.component.html',
  styleUrls: ['./editar-machine.component.css']
})
export class EditarMachineComponent implements OnInit {

  machine: Machine | null = null;

  constructor(
    private machineService: MachineService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Obtener y convertir el ID de la URL
    const idParam = this.activatedRoute.snapshot.params?.['id']; 
    const id = Number(idParam);
  
    // Validar si el ID es un número válido
    if (isNaN(id)) {
      this.toastr.error('ID inválido', 'Error', { timeOut: 3000 });
      this.router.navigate(['/']); 
      return; // Detener ejecución si el ID no es válido
    }
  
    // Llamar al servicio para obtener la máquina por ID
    this.machineService.getMachineById(id).subscribe(
      data => {
        this.machine = data;
      },
      err => {
        this.toastr.error(err.error?.mensaje || 'Error al cargar la máquina', 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }
  
  onUpdate(): void {
    // Obtener y convertir el ID a número
    const idParam = this.activatedRoute.snapshot.params?.['id']; 
    const id = Number(idParam);
  
    // Validar si el ID es un número válido
    if (isNaN(id)) {
      this.toastr.error('ID inválido', 'Error', { timeOut: 3000 });
      this.router.navigate(['/']);
      return;
    }
  
    // Asegurar que this.machine no es null antes de enviarlo al servicio
    if (!this.machine) {
      this.toastr.error('Datos de la máquina no disponibles', 'Error', { timeOut: 3000 });
      return;
    }
  
    // Llamar al servicio para actualizar
    this.machineService.updateMachine(id, this.machine).subscribe(
      data => {
        this.toastr.success('Máquina Actualizada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.message || 'Error al actualizar la máquina', 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }
    
  

}
