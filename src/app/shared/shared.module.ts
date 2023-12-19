import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SubheaderMenuComponent } from './subheader-menu/subheader-menu.component';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { ChartsComponent } from './charts/charts.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    ButtonModule
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
