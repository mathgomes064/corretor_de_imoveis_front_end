import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { InfoHeaderComponent } from './info-header/info-header.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    HeaderComponent,
    SideBarComponent,
    CardsContainerComponent,
    InfoHeaderComponent,
    DashboardSidebarComponent
  ],
  exports: [
    LoginFormComponent,
    RegisterFormComponent,
    HeaderComponent,
    CardsContainerComponent,
    SideBarComponent,
    InfoHeaderComponent,
    DashboardSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
