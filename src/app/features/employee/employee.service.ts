import { Injectable } from '@angular/core';
import { Employee } from './model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeService {

  // private headers = new Headers({ 'Content-Type': 'application/json' });
  url = 'api/employees';
  constructor(private http: HttpClient) {
  }

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.url + `/${id}`);
  }

  saveEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.url, employee);
  }

  // getHeroes(): Promise<any[]> {
  //   return this.http.get('api/heroes')
  //     .toPromise()
  //     .then(response => response as any[]);
  // }
}