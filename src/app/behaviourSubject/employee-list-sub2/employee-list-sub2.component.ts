import { Component } from '@angular/core';
import { EmployeeBehaveService } from 'src/app/services/employee-behave.service';

@Component({
  selector: 'app-employee-list-sub2',
  templateUrl: './employee-list-sub2.component.html',
  styleUrls: ['./employee-list-sub2.component.css'],
})
export class EmployeeListSub2Component {
  employees$ = this.empService.employeeList$;

  constructor(private empService: EmployeeBehaveService) {}
}
