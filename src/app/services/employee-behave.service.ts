import { Injectable } from '@angular/core';
import { EmployeeSub } from '../models/employee.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeBehaveService {

  private employees: EmployeeSub[] = [];

  // BehaviorSubjects with initial values
  private employeeListSubject = new BehaviorSubject<EmployeeSub[]>([]);
  employeeList$ = this.employeeListSubject.asObservable();

  private employeeCountSubject = new BehaviorSubject<number>(0);
  employeeCount$ = this.employeeCountSubject.asObservable();

  private lastAddedEmployeeSubject = new BehaviorSubject<EmployeeSub | null>(null);
  lastAddedEmployee$ = this.lastAddedEmployeeSubject.asObservable();

  constructor() {}

  addEmployee(emp: EmployeeSub) {
    this.employees.push(emp);

    // Emit updates
    this.employeeListSubject.next(this.employees);
    this.employeeCountSubject.next(this.employees.length);
    this.lastAddedEmployeeSubject.next(emp);
  }
}
