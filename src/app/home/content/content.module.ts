import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContribuicaoMensalComponent } from '../components/contribuicao-mensal/contribuicao-mensal.component';
import { ContribuicaoVoluntariaComponent } from '../components/contribuicao-voluntaria/contribuicao-voluntaria.component';
import { ChartsComponent } from 'src/app/home/components/charts/charts.component';
import { RouterModule } from '@angular/router';

import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';



@NgModule({
  declarations: [
    ChartsComponent,
    ContribuicaoMensalComponent,
    ContribuicaoVoluntariaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartModule,
    PanelModule
  ],
  exports: [
    ChartsComponent,
    ContribuicaoMensalComponent,
    ContribuicaoVoluntariaComponent
  ]
})
export class ContentModule { }
