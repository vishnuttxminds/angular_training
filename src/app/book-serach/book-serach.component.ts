import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Books } from '../models/employee.model';

@Component({
  selector: 'app-book-serach',
  templateUrl: './book-serach.component.html',
  styleUrls: ['./book-serach.component.css']
})
export class BookSerachComponent implements AfterViewInit {
 searchText: string = '';

  @ViewChild('searchBox') searchBox!: ElementRef;
  
  booksList: Books[] = [
    { id: 1, name: 'Book1' },
    { id: 2, name: 'Angular Basics' },
    { id: 3, name: 'JavaScript Essentials' }
  ];

  filteredBooks: Books[] = [];

  ngAfterViewInit() {
    this.searchBox.nativeElement.focus();
  }

  onSearch() {
    const text = this.searchText.toLowerCase();
    this.filteredBooks = this.booksList.filter(book =>
      book.name.toLowerCase().includes(text)
    );
  }
}
