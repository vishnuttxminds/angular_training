import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-child',
  templateUrl: './employee-child.component.html',
  styleUrls: ['./employee-child.component.css'],
})
export class EmployeeChildComponent implements OnInit {
  @Input() employees!: Employee[];

  @Output() searchResult = new EventEmitter<any[]>();
  searchText: string = '';
  filteredEmployees: Employee[] = [];
  isSearched: boolean = false; 

  ngOnInit(): void {
    this.filteredEmployees = this.employees;


  }

  onSearch() {
      this.isSearched = true; 
    const text = this.searchText.toLowerCase().trim();

    if (text.length < 2) {
      this.filteredEmployees = [];
      return;
    }

    this.filteredEmployees = this.employees.filter((emp) =>
      emp.name.toLowerCase().includes(text)
    );

    this.searchResult.emit(this.filteredEmployees);
  }
}
