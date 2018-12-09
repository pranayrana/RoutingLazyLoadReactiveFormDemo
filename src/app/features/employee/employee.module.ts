import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { EmployeeService } from './employee.service';
import { EmployeesComponent } from './employees.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeRouteModule } from './employee-routing.module';


@NgModule({
  declarations: [EmployeesComponent, EmployeeComponent],
  imports: [
    SharedModule,
    EmployeeRouteModule
  ],
  providers: [EmployeeService]
})
export class EmployeeModule { }
