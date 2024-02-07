import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeuarquivoComponent } from './meuarquivo/meuarquivo.component';

const routes: Routes = [
  { path: '', component: MeuarquivoComponent } // Rota raiz que renderiza o componente MeuarquivoComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
