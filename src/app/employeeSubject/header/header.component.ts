import { Component } from '@angular/core';
import { EmployeeSub } from 'src/app/models/employee.model';
import { EmployeeSubService } from 'src/app/services/employee-sub.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  count = 0;
  lastAdded =''

  constructor(private empService: EmployeeSubService) {}

  ngOnInit() {
    this.empService.employeeCountUpdated$.subscribe(cnt => {
      this.count = cnt;
    });

     this.empService.newEmployeeAdded$.subscribe((emp: EmployeeSub) => {
      this.lastAdded = emp.name;  
    });
  }

}
