import { Component, OnInit } from '@angular/core';
import { Machine } from '../models/machine';
import { MachineService } from '../services/machine.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-lista-machine',
  standalone: false,
  templateUrl: './lista-machine.component.html',
  styleUrls: ['./lista-machine.component.css']
})
export class ListaMachineComponent implements OnInit {

  machines: Machine[] = []; 
  filteredMachines: Machine[] = [];  // Lista filtrada

  isLoading: boolean = false; // Estado de carga
  errorMessage: string = ''; // Mensaje de error

  filtroNombre:string = '';
  filtroModelo:string = '';
  filtroEstado:string = '';

  constructor(
    private machineService: MachineService, 
    
  ) { }

  ngOnInit() {
    this.cargarMachines(); // Cambio de "cargarProductos" a "cargarMachines"
  }

  cargarMachines(): void {
    this.isLoading = true; // Activar estado de carga
    this.errorMessage = ''; // Reiniciar mensaje de error

    this.machineService.getMachines().subscribe({
      next: (data) => {
        setTimeout(() => {  // Simular un retraso de 2 segundos
          this.machines = data;
          this.filteredMachines = data;
          this.isLoading = false; // Desactivar carga después del tiempo
        }, 2000); 
      },
      error: (err) => {
        this.isLoading = false; // Desactivar carga
        this.errorMessage = 'Error al cargar las máquinas';
        console.error(this.errorMessage, err);
      }
    });
  }
  filtrarMachines(): void {
    this.filteredMachines = this.machines.filter(machine => {
      return (
        machine.name.toLowerCase().includes(this.filtroNombre.toLowerCase()) &&
        machine.model.toLowerCase().includes(this.filtroModelo.toLowerCase()) &&
        (this.filtroEstado ? machine.status === this.filtroEstado : true)
      );
    });
  }
  borrar(id: number):void {
    Swal.fire({
      title: '¿ Está seguro de eliminar la maquina seleccionada?',
      icon: 'warning',
      showCancelButton:true,
      confirmButtonText: 'Si',
      cancelButtonText:'No'
    }).then((result) =>{
      if(result.value){
        this.machineService.deleteMachine(id).subscribe(res => this.cargarMachines());
        Swal.fire(
          'Ok',
          'Machina Eliminada',
          'success'
          )
      }else if(result.dismiss === Swal.DismissReason.cancel){
        Swal.fire(
          'Cancelado',
          'Maquina no ha sido eliminada',
          'error'
        )

      }
    });
  }

}
