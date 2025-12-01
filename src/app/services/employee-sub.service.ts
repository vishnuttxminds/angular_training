import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee, EmployeeSub } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSubService {

newEmployeeAdded$ = new Subject<EmployeeSub>();

  // Subject to notify employee list
  employeeListUpdated$ = new Subject<EmployeeSub[]>();

  // Subject to notify employee count (header)
  employeeCountUpdated$ = new Subject<number>();

  private employees: EmployeeSub[] = [];

  constructor() {}

  addEmployee(emp: EmployeeSub) {
    this.employees.push(emp);
    this.newEmployeeAdded$.next(emp);
    this.employeeListUpdated$.next(this.employees);
    this.employeeCountUpdated$.next(this.employees.length);
  }
}
