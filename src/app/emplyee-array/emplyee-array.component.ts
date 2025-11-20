import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-emplyee-array',
  templateUrl: './emplyee-array.component.html',
  styleUrls: ['./emplyee-array.component.css'],
})
export class EmplyeeArrayComponent {
  employees: Employee[] = [
    { id: 1, name: 'John', role: 'Manager', salary: 10000 },
    { id: 2, name: 'Sara', role: 'Developer', salary: 15000 },
    { id: 3, name: 'Ravi', role: 'Designer', salary: 220000 },
  ];

  parentSearchResult: any[] = [];

  handleSearch(result: any[]) {
    this.parentSearchResult = result;
  }
}
