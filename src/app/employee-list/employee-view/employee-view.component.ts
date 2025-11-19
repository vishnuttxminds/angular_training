import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';


@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {
  @Input() employee!: Employee;  
}
