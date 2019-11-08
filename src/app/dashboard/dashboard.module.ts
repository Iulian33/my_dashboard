import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RecordsComponent } from './records/records.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LayoutComponent } from './layout/layout.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
     DashboardComponent,
     RecordsComponent, 
     ContactsComponent, LayoutComponent],
  imports: [
    CommonModule,
    ChartsModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
