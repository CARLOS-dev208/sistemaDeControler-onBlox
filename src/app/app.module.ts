import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './template/header/header.component';
import { NavComponent } from './template/nav/nav.component';
import { MatListModule } from '@angular/material/list';
import { ClienteCrudComponent } from './pages/cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { VendedoresCrudComponent } from './pages/vendedores-crud/vendedores-crud.component';
import { ProdutosCrudComponent } from './pages/produtos-crud/produtos-crud.component';
import { MatIconModule } from '@angular/material/icon';
import { ProdutosCreateComponent } from './components/produtos/produtos-create/produtos-create.component';
import { VendedoresCreateComponent } from './components/vendedores/vendedores-create/vendedores-create.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ClienteCrudComponent,
    ClienteCreateComponent,
    VendedoresCrudComponent,
    ProdutosCrudComponent,
    ProdutosCreateComponent,
    VendedoresCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
