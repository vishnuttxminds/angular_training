import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

   employees: Employee[] = [
    { id: 1, name: 'John', role: 'Manager', salary: 10000 },
    { id: 2, name: 'Sara', role: 'Developer', salary: 15000 },
    { id: 3, name: 'Ravi', role: 'Designer', salary: 220000 }
  ];
}
