import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { InfoHeaderComponent } from './info-header/info-header.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';
import { RegisterImovelModalComponent } from './register-imovel-modal/register-imovel-modal.component';
import { EditImovelModalComponent } from './edit-imovel-modal/edit-imovel-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    HeaderComponent,
    CardsContainerComponent,
    InfoHeaderComponent,
    DashboardSidebarComponent,
    EditUserModalComponent,
    RegisterImovelModalComponent,
    EditImovelModalComponent,
  ],
  exports: [
    LoginFormComponent,
    RegisterFormComponent,
    HeaderComponent,
    CardsContainerComponent,
    InfoHeaderComponent,
    DashboardSidebarComponent,
    EditUserModalComponent,
    RegisterImovelModalComponent,
    EditImovelModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
 
})
export class SharedModule { }
