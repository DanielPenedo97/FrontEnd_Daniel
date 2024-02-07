import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meuarquivo',
  templateUrl: './meuarquivo.component.html',
  styleUrls: ['./meuarquivo.component.css']
})
export class MeuarquivoComponent implements OnInit {
  formulario: FormGroup; // Declaração do formulário

  constructor(private formBuilder: FormBuilder) {
    // Inicialização do formulário
    this.formulario = this.formBuilder.group({
      nomeEstacao: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      localizacao: ['', Validators.required],
      statusInstalacao: ['']
    });
  }

  ngOnInit(): void {
    // Inicialização do formulário
    this.formulario = this.formBuilder.group({
      nomeEstacao: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      localizacao: ['', Validators.required],
      statusInstalacao: ['']
    });
  }

  enviarFormulario() {
    // Lógica para lidar com o envio do formulário
    console.log(this.formulario.value);
  }
}
