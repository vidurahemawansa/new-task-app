import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TasksAddComponent } from './tasks-add/tasks-add.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TasksAddComponent,
    TasksListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
