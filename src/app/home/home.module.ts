import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../shared/shared.module';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
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
    DividerModule,
    ContentModule,
    ButtonModule,
    CardModule,
  ],

})
export class HomeModule { }
