import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMachineComponent } from './machine/lista-machine.component';
import { DetalleMachineComponent } from './machine/detalle-machine.component';
import { NuevoMachineComponent } from './machine/nuevo-machine.component';
import { EditarMachineComponent } from './machine/editar-machine.component';

const routes: Routes = [
  {path: '', component: ListaMachineComponent},
  {path: 'detalle/:id', component: DetalleMachineComponent},
  {path: 'nuevo', component: NuevoMachineComponent},
  {path: 'editar/:id', component: EditarMachineComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
