import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContribuicaoMensalComponent } from '../components/contribuicao-mensal/contribuicao-mensal.component';
import { ContribuicaoVoluntariaComponent } from '../components/contribuicao-voluntaria/contribuicao-voluntaria.component';
import { ChartsComponent } from 'src/app/home/components/charts/charts.component';
import { RouterModule } from '@angular/router';

import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { ButtonAddContribuicaoComponent } from '../components/button-add-contribuicao/button-add-contribuicao.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';




@NgModule({
  declarations: [
    ChartsComponent,
    ContribuicaoMensalComponent,
    ContribuicaoVoluntariaComponent,
    ButtonAddContribuicaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartModule,
    PanelModule,
    ButtonModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  exports: [
    ChartsComponent,
    ContribuicaoMensalComponent,
    ContribuicaoVoluntariaComponent,
    ButtonAddContribuicaoComponent
  ],
  providers: [provideNgxMask()]
})
export class ContentModule { }
