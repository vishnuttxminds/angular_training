import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeSub } from 'src/app/models/employee.model';
import { EmployeeBehaveService } from 'src/app/services/employee-behave.service';

@Component({
  selector: 'app-header-sub',
  templateUrl: './header-sub.component.html',
  styleUrls: ['./header-sub.component.css'],
})
export class HeaderSubComponent {
  count$!: Observable<number>;
  lastAdded$!: Observable<EmployeeSub | null>;

  constructor(private empService: EmployeeBehaveService) {
    this.count$ = this.empService.employeeCount$;
    this.lastAdded$ = this.empService.lastAddedEmployee$;
  }
}
