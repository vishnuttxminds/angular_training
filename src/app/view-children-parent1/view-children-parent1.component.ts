import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-view-children-parent1',
  templateUrl: './view-children-parent1.component.html',
  styleUrls: ['./view-children-parent1.component.css'],
})
export class ViewChildrenParent1Component {
  searchText: string = '';

  employees: Employee[] = [
    { id: 1, name: 'John', role: 'Manager', salary: 10000 },
    { id: 2, name: 'Sara', role: 'Developer', salary: 15000 },
    { id: 3, name: 'Ravi', role: 'Designer', salary: 220000 },
  ];

  @ViewChildren('empName') empNameRefs!: QueryList<ElementRef>;

  onSearch() {
    const search = this.searchText.toLowerCase();

    this.empNameRefs.forEach((empRef) => {
      const text = empRef.nativeElement.innerText.toLowerCase();

      if (search && text.includes(search)) {
        empRef.nativeElement.style.backgroundColor = 'yellow';
        empRef.nativeElement.style.fontWeight = 'bold';
      } else {
        empRef.nativeElement.style.backgroundColor = 'transparent';
        empRef.nativeElement.style.fontWeight = 'normal';
      }
    });
  }
}
