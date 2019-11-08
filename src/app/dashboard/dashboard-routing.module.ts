import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { RecordsComponent } from './records/records.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: LayoutComponent,},
      { path: 'records', component: RecordsComponent,},
      { path: 'contacts', component: ContactsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule { }
