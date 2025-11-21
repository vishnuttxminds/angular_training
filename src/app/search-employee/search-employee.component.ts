import { Component, ElementRef, ViewChild } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css'],
})
export class SearchEmployeeComponent {
  searchText: string = '';
  filteredEmployees: Employee[] = [];
  isSearched: boolean = false;

  @ViewChild('searchBtn') searchButton!: ElementRef;
  @ViewChild('searchInput') searchInput!: ElementRef;

  employees: Employee[] = [
    { id: 1, name: 'John', role: 'Manager', salary: 10000 },
    { id: 2, name: 'Sara', role: 'Developer', salary: 15000 },
    { id: 3, name: 'Ravi', role: 'Designer', salary: 220000 },
  ];

  onSearch() {
    this.isSearched = true;
    const text = this.searchInput.nativeElement.value.toLowerCase().trim();

    if (text.length < 2) {
      this.filteredEmployees = [];
      return;
    }

    this.filteredEmployees = this.employees.filter((emp) =>
      emp.name.toLowerCase().includes(text)
    );
  }

  ngAfterViewInit() {
    this.searchButton.nativeElement.addEventListener('click', () => {
      this.onSearch();
    });
  }
}
