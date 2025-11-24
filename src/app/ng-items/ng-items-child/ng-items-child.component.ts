import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-ng-items-child',
  templateUrl: './ng-items-child.component.html',
  styleUrls: ['./ng-items-child.component.css']
})
export class NgItemsChildComponent {

  isActive: boolean = true;

   employees: Employee[] = [
      { id: 1, name: 'John', role: 'Manager', salary: 10000 },
      { id: 2, name: 'Sara', role: 'Developer', salary: 15000 },
      { id: 3, name: 'Ravi', role: 'Designer', salary: 220000 },
    ];

}
