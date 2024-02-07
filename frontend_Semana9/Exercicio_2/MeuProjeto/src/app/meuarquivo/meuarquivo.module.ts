import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Importe o ReactiveFormsModule

import { MeuarquivoComponent } from './meuarquivo.component';

@NgModule({
  declarations: [
    MeuarquivoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule // Adicione o ReactiveFormsModule aos imports
  ]
})
export class MeuarquivoModule { }
