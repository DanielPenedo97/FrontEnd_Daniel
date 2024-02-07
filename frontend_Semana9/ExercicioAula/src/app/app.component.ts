import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExercicioAula';
}

@Component({
  selector: 'app-meus-formularios',
  templateUrl: './meus-formularios.component.html',
  styleUrls: ['./meus-formularios.component.css']
})
export class MeusFormulariosComponent implements OnInit {
  meuFormulario: FormGroup = new FormGroup({}); // Inicialização direta

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.meuFormulario = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      idade: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.meuFormulario.valid) {
      console.log(this.meuFormulario.value);
    } else {
      console.error('Formulário inválido. Por favor, preencha todos os campos corretamente.');
    }
  }
}

