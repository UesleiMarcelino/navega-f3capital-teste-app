import { NgModule } from '@angular/core';
import { ContribuicaoMensalComponent } from './components/contribuicao-mensal/contribuicao-mensal.component';
import { ContribuicaoVoluntariaComponent } from './components/contribuicao-voluntaria/contribuicao-voluntaria.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../shared/shared.module';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    HomeComponent,
    ContribuicaoMensalComponent,
    ContribuicaoVoluntariaComponent,
  ],
  imports: [
    RouterModule,
    HomeRoutingModule,
    SharedModule,
    ButtonModule,
    CardModule,
  ],
  exports: [
    ContribuicaoMensalComponent,
    ContribuicaoVoluntariaComponent
  ]
})
export class HomeModule { }
