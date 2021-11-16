import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardOrderComponent } from './dashboard-order/dashboard-order.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditpageComponent } from './editpage/editpage.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardIndexComponent,
    DashboardProfileComponent,
    DashboardOrderComponent,
    EditpageComponent
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule,
     MatMenuModule, 
      FormsModule,
       ReactiveFormsModule,
       MatDialogModule,
       MatFormFieldModule,
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
export class DashboardModule {}
