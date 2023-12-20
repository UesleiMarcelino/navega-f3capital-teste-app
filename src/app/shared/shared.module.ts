import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SubheaderMenuComponent } from './subheader-menu/subheader-menu.component';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { ChartsComponent } from '../home/components/charts/charts.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { PanelModule } from 'primeng/panel';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    SubheaderMenuComponent,
    SidenavMenuComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    DropdownModule,
    MessagesModule,
    PasswordModule,
    PanelModule
  ],
  exports: [
    HeaderComponent,
    LoginComponent,
    SubheaderMenuComponent,
    SidenavMenuComponent,
  ],
})
export class SharedModule { }
