import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAdicionarComponent } from './formadicionar/formadicionar.component';
import { ComponentListarComponent } from './componentlistar/componentlistar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAdicionarComponent,
    ComponentListarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
