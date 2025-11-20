import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css'],
})
export class EmployeeViewComponent {
  @Input() employee!: Employee;

  // child to parent data transfer @output
  @Output() messageEvent = new EventEmitter<string>();
  @Output() messageEvent2 = new EventEmitter<string>();

  ngOnInit() {
    this.messageEvent.emit('Hello from Child Component!');
    this.messageEvent2.emit('Hello from Child Component 2222');
  }
}
