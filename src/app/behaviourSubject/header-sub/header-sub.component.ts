import { Component } from '@angular/core';
import { EmployeeBehaveService } from 'src/app/services/employee-behave.service';

@Component({
  selector: 'app-header-sub',
  templateUrl: './header-sub.component.html',
  styleUrls: ['./header-sub.component.css'],
})
export class HeaderSubComponent {
  constructor(private empService: EmployeeBehaveService) {}

  count$ = this.empService.employeeCount$;
  lastAdded$ = this.empService.lastAddedEmployee$;
}
