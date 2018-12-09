import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './employees.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: EmployeesComponent
      },
      {
        path: 'edit/:id',
        component: EmployeeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule]
})

export class EmployeeRouteModule { }