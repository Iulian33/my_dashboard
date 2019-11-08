import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    DashboardRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
