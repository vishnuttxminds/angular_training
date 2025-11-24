import { Component, DoCheck, Input } from '@angular/core';
import { Books } from 'src/app/models/employee.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements DoCheck {

    @Input() books: Books[] = [];

  previousLength = 0;
  message = '';

  ngDoCheck() {
    if (this.books.length !== this.previousLength) {
      this.message = 'New search result';
      this.previousLength = this.books.length;
    } else {
      this.message = 'Previous search result';
    }
  }

}
