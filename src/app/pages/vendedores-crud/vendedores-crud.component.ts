import { Component, OnInit } from '@angular/core';
import {
  Vendedores,
  VendedoresService,
} from 'src/app/services/vendedores.service';

@Component({
  selector: 'app-vendedores-crud',
  templateUrl: './vendedores-crud.component.html',
  styleUrls: ['./vendedores-crud.component.css'],
})
export class VendedoresCrudComponent implements OnInit {
  constructor(private service: VendedoresService) {}
  vendedores: Vendedores[];
  ngOnInit(): void {
    this.service.getVendedores().subscribe((res) => {
      this.vendedores = res;
    });
  }

  deleta(vendedore: Vendedores) {
    this.service.deleta(vendedore.id).subscribe((res) => {
      const index = this.vendedores.indexOf(vendedore);
      this.vendedores.splice(index, 1);
      this.service.showMessage('Vendedor excluido com sucesso!');
    });
  }
}
