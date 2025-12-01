import { Component } from '@angular/core';
import { EmployeeSub } from 'src/app/models/employee.model';
import { EmployeeSubService } from 'src/app/services/employee-sub.service';

@Component({
  selector: 'app-employee-list-sub',
  templateUrl: './employee-list-sub.component.html',
  styleUrls: ['./employee-list-sub.component.css']
})
export class EmployeeListSubComponent {

  employees: EmployeeSub[] = [];

  constructor(private empService: EmployeeSubService) {}

  ngOnInit() {
    this.empService.employeeListUpdated$.subscribe(list => {
      this.employees = list;
    });
  }

}
