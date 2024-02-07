import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuarquivoModule } from './meuarquivo/meuarquivo.module'; // Importe o MeuarquivoModule

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MeuarquivoModule // Adicione o MeuarquivoModule aos imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
