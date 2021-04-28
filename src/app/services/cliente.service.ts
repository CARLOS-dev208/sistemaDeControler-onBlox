import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

export interface Cliente {
  id?: number;
  nome: string;
  codigo: number;
  vendedorCodigo: number;
}

export interface ClienteVendedor {
  id?: number;
  nome: string;
  codigo: number;
  vendedor: { id: number; codigo: number; nome: string };
}

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getClientes(): Observable<ClienteVendedor[]> {
    return this.http.get<ClienteVendedor[]>(`${this.baseUrl}/clientes`);
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.baseUrl}/clientes`, cliente);
  }

  deleta(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.baseUrl}/clientes/${id}`);
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(
      `${this.baseUrl}/clientes/${cliente.id}`,
      cliente
    );
  }

  showMessage(msg: string) {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
