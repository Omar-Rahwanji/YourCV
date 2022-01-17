import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import { DashboardAdminLayoutComponent } from './dashboard-admin-layout/dashboard-admin-layout.component';
import { DashboardAdminIndexComponent } from './dashboard-admin-index/dashboard-admin-index.component';
import { DashboardAdminProfileComponent } from './dashboard-admin-profile/dashboard-admin-profile.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TemplateComponent } from './template/template.component';
import {MatCardModule} from '@angular/material/card';
import { CreateTemplateComponent } from './create-template/create-template.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { RoleComponent } from './role/role.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { MatInputModule } from '@angular/material/input';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { UsersComponent } from './users/users.component';
import { UsersOrdersComponent } from './users-orders/users-orders.component';
import { PermessionComponent } from './permession/permession.component';
import { CreatePermessionComponent } from './create-permession/create-permession.component';
import { CreatePermessionRoleComponent } from './create-permession-role/create-permession-role.component';
import {MatSelectModule} from '@angular/material/select';
import { EditAdminProfileComponent } from './edit-admin-profile/edit-admin-profile.component';
import { EditPermissionComponent } from './edit-permission/edit-permission.component';
import { EditPermissionRoleComponent } from './edit-permission-role/edit-permission-role.component';
import { WebsiteInfoComponent } from './website-info/website-info.component';
import { EditWebsiteComponent } from './edit-website/edit-website.component';
import { ReportMonthlyComponent } from './report-monthly/report-monthly.component';
import { ReportFinancialComponent } from './report-financial/report-financial.component';
import { InboxComponent } from './inbox/inbox.component';


@NgModule({
  declarations: [
    DashboardAdminLayoutComponent,
    DashboardAdminIndexComponent,
    DashboardAdminProfileComponent,
    TemplateComponent,
    CreateTemplateComponent,
    EditTemplateComponent,
    RoleComponent,
    CreateRoleComponent,
    EditRoleComponent,
    UsersComponent,
    UsersOrdersComponent,
    PermessionComponent,
    CreatePermessionComponent,
    CreatePermessionRoleComponent,
    EditAdminProfileComponent,
    EditPermissionComponent,
    EditPermissionRoleComponent,
    WebsiteInfoComponent,
    EditWebsiteComponent,
    ReportMonthlyComponent,
    ReportFinancialComponent,
    InboxComponent
    
  ],
  imports: [
    CommonModule,
    DashboardAdminRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,ReactiveFormsModule,
    MatMenuModule ,
    MatInputModule,
    MatSelectModule
  ]
})
export class DashboardAdminModule { }
