import { Component, OnInit } from '@angular/core';
import { Produto, ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos-crud',
  templateUrl: './produtos-crud.component.html',
  styleUrls: ['./produtos-crud.component.css'],
})
export class ProdutosCrudComponent implements OnInit {
  constructor(private service: ProdutosService) {}
  produtos: Produto[];
  ngOnInit(): void {
    this.service.getProdutos().subscribe((res) => {
      this.produtos = res;
    });
  }

  deleta(produto: Produto) {
    this.service.deleta(produto.id).subscribe((res) => {
      const index = this.produtos.indexOf(produto);
      this.produtos.splice(index, 1);
      this.service.showMessage('Produto excluido com sucesso!');
    });
  }
}
