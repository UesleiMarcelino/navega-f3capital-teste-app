import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContribuicaoMensalComponent } from './components/contribuicao-mensal/contribuicao-mensal.component';
import { ContribuicaoVoluntariaComponent } from './components/contribuicao-voluntaria/contribuicao-voluntaria.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    ContribuicaoMensalComponent,
    ContribuicaoVoluntariaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule
  ],
  exports: [
    ContribuicaoMensalComponent,
    ContribuicaoVoluntariaComponent
  ]
})
export class HomeModule { }
