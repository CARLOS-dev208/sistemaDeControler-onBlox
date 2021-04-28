import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente, ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css'],
})
export class ClienteCreateComponent implements OnInit {
  constructor(private router: Router, private service: ClienteService) {}
  clinte: Cliente = { nome: '', codigo: null, vendedorCodigo: null };
  isErro: string = null;

  ngOnInit(): void {}

  create() {
    this.service.create(this.clinte).subscribe(
      (res) => {
        this.service.showMessage('Cliente cadastrado com sucesso!');
        this.router.navigate(['clientes']);
      },
      (error) => {
        this.isErro = error.error.mensagem;
        this.service.showMessage(this.isErro);
      }
    );
  }
}
