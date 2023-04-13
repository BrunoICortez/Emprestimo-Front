import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { CadastroAtualizarComponent } from './pages/cadastro-atualizar/cadastro-atualizar.component';
import { DeletarComponent } from './pages/deletar/deletar.component';
import { AtualizarComponent } from './pages/atualizar/atualizar.component';

const routes: Routes = [
  {
    path: 'home' , component: HomeComponent
  },
  {
    path: 'clientes' , component: ClientesComponent
  },
  {
    path: 'clientes/cadastrar', component: CadastroAtualizarComponent
  },
  {
    path: 'clientes/editar/:cpf', component: AtualizarComponent
  },
  {
  path: 'clientes/excluir/:cpf', component: DeletarComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
