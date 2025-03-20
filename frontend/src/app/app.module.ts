import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//external 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ListaMachineComponent } from './machine/lista-machine.component';
import { EditarMachineComponent } from './machine/editar-machine.component';
import { NuevoMachineComponent } from './machine/nuevo-machine.component';
import { DetalleMachineComponent } from './machine/detalle-machine.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaMachineComponent,
    EditarMachineComponent,
    NuevoMachineComponent,
    DetalleMachineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
