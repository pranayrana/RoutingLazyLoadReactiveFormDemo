import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeService } from './employee.service';
import { Employee } from './model';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
// tslint:disable-next-line:component-selector
selector: 'employee',
templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {

id: number;
employee: Employee;
employeeForm: FormGroup;

constructor(private employeeService: EmployeeService,
private route: ActivatedRoute,
private router: Router,
private formBuilder: FormBuilder) {
}

ngOnInit(): void {
this.route.params.subscribe(param => {
this.id = +param['id'];
this.getEmployee(this.id);
});
this.buildForm();
}

get addressArray(): FormArray {
return <FormArray>this.employeeForm.get('Addresses');
}

addAddress() {
this.addressArray.push(this.buildAddress());
}

saveEmployee() {
this.employee = this.employeeForm.value;
this.employee.id = this.id;
this.employeeService.saveEmployee(this.employee)
.pipe(
tap(() => console.log('saved'))
)
.subscribe(() => {
this.router.navigate(['/', 'employees']);
});
}

private getEmployee(id: number) {
this.employeeService.getEmployeeById(id).subscribe(
data => {
this.employee = data;
this.setEmployeeData();
}
);
}

private setEmployeeData() {
this.employeeForm.patchValue({
Name: this.employee.Name,
Email: this.employee.Email,
Phone: this.employee.Phone
});

this.employee.Addresses.forEach(
address => {
const addressgorup = this.buildAddress();
addressgorup.patchValue(address);
this.addressArray.push(addressgorup);
});
}

private buildForm() {
this.employeeForm = this.formBuilder.group({
'Name': ['', [Validators.required]],
'Email': ['', [Validators.required, Validators.email]],
'Phone': [''],
'Addresses': this.formBuilder.array([])
});
}

private buildAddress() {
return this.formBuilder.group({
'Type': [''],
'Street': [''],
'City': [''],
'PinCode': ['']
});
}
}