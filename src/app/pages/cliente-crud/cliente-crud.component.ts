import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ClienteService,
  ClienteVendedor,
} from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-crud',
  templateUrl: './cliente-crud.component.html',
  styleUrls: ['./cliente-crud.component.css'],
})
export class ClienteCrudComponent implements OnInit {
  constructor(private router: Router, private service: ClienteService) {}
  clientes: ClienteVendedor[];
  ngOnInit(): void {
    this.service.getClientes().subscribe((res) => {
      this.clientes = res;
      console.log(this.clientes);
    });
  }

  navigateToCliente() {
    this.router.navigate(['clientes/create']);
  }

  deleta(cliente: ClienteVendedor) {
    this.service.deleta(cliente.id).subscribe((res) => {
      const index = this.clientes.indexOf(cliente);
      this.clientes.splice(index, 1);
      this.service.showMessage('Cliente excluido com sucesso!');
    });
  }
}
