import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Machine } from '../models/machine';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  private apiUrl = 'http://localhost:8080/machine/'; // Ruta de la API NestJS

  constructor(private http: HttpClient) {}

  getMachines(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this.apiUrl);
  }

  getMachineById(id: number): Observable<Machine> {
    return this.http.get<Machine>(`${this.apiUrl.replace(/\/$/, '')}/${id}`);
  }
  
  createMachine(machine: Machine): Observable<any> {
    return this.http.post<Machine>(this.apiUrl, machine);
  }

  updateMachine(id: number, partialMachine: Partial<Machine>): Observable<Machine> {
    return this.http.patch<Machine>(`${this.apiUrl.replace(/\/$/, '')}/${id}`, partialMachine);
  }

  deleteMachine(id: number): Observable<any> {
    return this.http.delete<void>(`${this.apiUrl.replace(/\/$/, '')}/${id}`);
  }
}
