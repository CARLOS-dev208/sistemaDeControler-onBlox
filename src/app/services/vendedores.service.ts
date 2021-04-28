import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

export interface Vendedores {
  id?: number;
  nome: string;
  codigo: number;
}
@Injectable({
  providedIn: 'root',
})
export class VendedoresService {
  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getVendedores(): Observable<Vendedores[]> {
    return this.http.get<Vendedores[]>(`${this.baseUrl}/vendedores`);
  }

  create(vendedores: Vendedores): Observable<Vendedores> {
    return this.http.post<Vendedores>(`${this.baseUrl}/vendedores`, vendedores);
  }

  deleta(id: number): Observable<Vendedores> {
    return this.http.delete<Vendedores>(`${this.baseUrl}/vendedores/${id}`);
  }

  update(vendedores: Vendedores): Observable<Vendedores> {
    return this.http.put<Vendedores>(
      `${this.baseUrl}/vendedores/${vendedores.id}`,
      vendedores
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
