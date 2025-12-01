import { Component } from '@angular/core';
import { EmployeeBehaveService } from 'src/app/services/employee-behave.service';

@Component({
  selector: 'app-employee-form-sub2',
  templateUrl: './employee-form-sub2.component.html',
  styleUrls: ['./employee-form-sub2.component.css'],
})
export class EmployeeFormSub2Component {
  constructor(private empService: EmployeeBehaveService) {}

  addEmployee(form: any) {
    const emp = {
      id: Date.now(),
      name: form.value.name,
      department: form.value.department,
    };

    this.empService.addEmployee(emp);
    form.resetForm();
  }
}
