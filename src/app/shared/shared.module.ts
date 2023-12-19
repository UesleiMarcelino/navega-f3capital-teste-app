import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SubheaderMenuComponent } from './subheader-menu/subheader-menu.component';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { ChartsComponent } from './charts/charts.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    SubheaderMenuComponent,
    SidenavMenuComponent,
    ChartsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    LoginComponent,
    SubheaderMenuComponent,
    SidenavMenuComponent,
    ChartsComponent,
  ],
})
export class SharedModule { }
