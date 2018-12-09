import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import { EmployeeService } from './employee.service';
import { Employee } from './model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployee().pipe(
      tap(() => console.log('data received'))
    ).subscribe(
      (data) => this.employees = data
    );
  }
}