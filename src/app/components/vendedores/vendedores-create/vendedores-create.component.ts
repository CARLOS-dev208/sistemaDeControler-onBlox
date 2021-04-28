import { Router } from '@angular/router';
import {
  Vendedores,
  VendedoresService,
} from './../../../services/vendedores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendedores-create',
  templateUrl: './vendedores-create.component.html',
  styleUrls: ['./vendedores-create.component.css'],
})
export class VendedoresCreateComponent implements OnInit {
  constructor(private service: VendedoresService, private router: Router) {}
  vendedor: Vendedores = { nome: null, codigo: null };
  isErro: string = null;
  ngOnInit(): void {}

  create() {
    this.service.create(this.vendedor).subscribe(
      () => {
        this.service.showMessage('Vendedor cadastrado com sucesso!');
        this.router.navigate(['vendedores']);
      },
      (error) => {
        this.isErro = error.error.mensagem;
        this.service.showMessage(this.isErro);
      }
    );
  }
}
