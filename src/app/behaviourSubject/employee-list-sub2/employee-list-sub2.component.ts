import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeSub } from 'src/app/models/employee.model';
import { EmployeeBehaveService } from 'src/app/services/employee-behave.service';

@Component({
  selector: 'app-employee-list-sub2',
  templateUrl: './employee-list-sub2.component.html',
  styleUrls: ['./employee-list-sub2.component.css'],
})
export class EmployeeListSub2Component {
  employees$: Observable<EmployeeSub[]>;

  constructor(private empService: EmployeeBehaveService) {
    this.employees$ = this.empService.employeeList$;
  }
}
