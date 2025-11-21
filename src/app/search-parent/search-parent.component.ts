import { Component, ElementRef, ViewChild } from '@angular/core';
import { Employee } from '../models/employee.model';
import { SearchChildComponent } from './search-child/search-child.component';

@Component({
  selector: 'app-search-parent',
  templateUrl: './search-parent.component.html',
  styleUrls: ['./search-parent.component.css']
})
export class SearchParentComponent {


@ViewChild('childRef') child!: SearchChildComponent;

triggerChildSearch() {
  this.child.onSearch(); // call child's search method
}

  
}
