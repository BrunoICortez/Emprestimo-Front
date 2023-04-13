import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import {HttpClientModule } from '@angular/common/http';
import { CadastroAtualizarComponent } from './pages/cadastro-atualizar/cadastro-atualizar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeletarComponent } from './pages/deletar/deletar.component';
import { AtualizarComponent } from './pages/atualizar/atualizar.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SidebarComponent,
    HomeComponent,
    ClientesComponent,
    CadastroAtualizarComponent,
    DeletarComponent,
    AtualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
