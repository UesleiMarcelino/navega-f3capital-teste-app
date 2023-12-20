import { NgModule } from '@angular/core';
import { ContribuicaoMensalComponent } from './components/contribuicao-mensal/contribuicao-mensal.component';
import { ContribuicaoVoluntariaComponent } from './components/contribuicao-voluntaria/contribuicao-voluntaria.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../shared/shared.module';
import { CardModule } from 'primeng/card';
import { ContentComponent } from './content/content.component';
import { ContentModule } from './content/content.module';


@NgModule({
  declarations: [
    HomeComponent,
    ContentComponent,
  ],
  imports: [
    RouterModule,
    HomeRoutingModule,
    SharedModule,
    ContentModule,
    ButtonModule,
    CardModule,
  ],

})
export class HomeModule { }
