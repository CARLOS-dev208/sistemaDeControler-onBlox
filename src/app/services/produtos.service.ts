import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Produto {
  id?: number;
  nome: string;
  codigo: number;
}
@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.baseUrl}/produtos`);
  }

  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.baseUrl}/produtos`, produto);
  }

  deleta(id: number): Observable<Produto> {
    return this.http.delete<Produto>(`${this.baseUrl}/produtos/${id}`);
  }

  update(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(
      `${this.baseUrl}/produtos/${produto.id}`,
      produto
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
