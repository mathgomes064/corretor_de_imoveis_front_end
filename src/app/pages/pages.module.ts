import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DetailImovelComponent } from './detail-imovel/detail-imovel.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    DetailImovelComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    HttpClientModule,
    MatMenuModule
  ]
})
export class PagesModule { }
