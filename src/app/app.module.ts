import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContribuicaoMensalComponent } from './home/components/contribuicao-mensal/contribuicao-mensal.component';
import { ContribuicaoVoluntariaComponent } from './home/components/contribuicao-voluntaria/contribuicao-voluntaria.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
