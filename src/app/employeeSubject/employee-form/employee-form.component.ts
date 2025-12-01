import { Component } from '@angular/core';
import { EmployeeSubService } from 'src/app/services/employee-sub.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
    constructor(private empService: EmployeeSubService) {}

  addEmployee(form: any) {
    const emp = {
      id: Date.now(),
      name: form.value.name,
      department: form.value.department
    };

    this.empService.addEmployee(emp);
  }

}
