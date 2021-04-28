import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto, ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos-create',
  templateUrl: './produtos-create.component.html',
  styleUrls: ['./produtos-create.component.css'],
})
export class ProdutosCreateComponent implements OnInit {
  produto: Produto = { nome: null, codigo: null };
  isErro: string = null;
  constructor(private service: ProdutosService, private router: Router) {}

  ngOnInit(): void {}

  create() {
    this.service.create(this.produto).subscribe(
      (res) => {
        this.service.showMessage('Produto cadastrado com sucesso!');
        this.router.navigate(['produtos']);
      },
      (error) => {
        this.isErro = error.error.mensagem;
        this.service.showMessage(this.isErro);
      }
    );
  }
}
