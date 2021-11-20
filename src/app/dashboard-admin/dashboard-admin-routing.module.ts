import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { DashboardAdminIndexComponent } from './dashboard-admin-index/dashboard-admin-index.component';
import { DashboardAdminLayoutComponent } from './dashboard-admin-layout/dashboard-admin-layout.component';
import { DashboardAdminProfileComponent } from './dashboard-admin-profile/dashboard-admin-profile.component';
import { EditAdminProfileComponent } from './edit-admin-profile/edit-admin-profile.component';
import { EditPermissionRoleComponent } from './edit-permission-role/edit-permission-role.component';
import { EditPermissionComponent } from './edit-permission/edit-permission.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { EditWebsiteComponent } from './edit-website/edit-website.component';
import { InboxComponent } from './inbox/inbox.component';
import { PermessionComponent } from './permession/permession.component';
import { ReportFinancialComponent } from './report-financial/report-financial.component';
import { ReportMonthlyComponent } from './report-monthly/report-monthly.component';
import { RoleComponent } from './role/role.component';
import { TemplateComponent } from './template/template.component';
import { UsersOrdersComponent } from './users-orders/users-orders.component';
import { UsersComponent } from './users/users.component';
import { WebsiteInfoComponent } from './website-info/website-info.component';

const DashboardAdminChildrenRoute: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: InboxComponent
  },
  {
    path: 'profile',
    component: DashboardAdminProfileComponent
  },
  {
    path:'role',
    component:RoleComponent
  },
  {
    path:'user',
    component:UsersComponent
  },
  {
    path:'userorder/:userId',
    component:UsersOrdersComponent
  },
  {
    path:'permission',
    component:PermessionComponent
  },
  {
    path:'editprofile/:id',
    component:EditAdminProfileComponent
  },
  {
    path:'edittemplate/:id',
    component:EditTemplateComponent
  },
  {
    path:'editrole/:id',
    component:EditRoleComponent
  },
  {
    path:'editpermission/:id',
    component:EditPermissionComponent
  },
  {
    path:'editpermissionrole/:id',
    component:EditPermissionRoleComponent
  },
  {
    path:'website',
    component:WebsiteInfoComponent
  },
  {
    path:'editwebsite',
    component:EditWebsiteComponent
  },
  {
    path:'monthlyreport',
    component:ReportMonthlyComponent
  },
  {
    path:'financialyReport',
    component:ReportFinancialComponent
  },
  {
    path: 'inbox',
    component: InboxComponent
  },
  {
    path: 'template',
    component: TemplateComponent
  }
];

const routes: Routes = [
  {
    path: '',
    component: DashboardAdminLayoutComponent,
    children: DashboardAdminChildrenRoute
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule { }
