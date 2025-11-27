import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookSearchApiService {
  private booksList = [
    'Book - 1',
    'Book - 2',
    'Book - 3',
    'Book - 4',
    'Book - 5',
    'Book - 6',
  ];

  search(queryInput: string): string[] {
    queryInput = queryInput.toLowerCase();
    return this.booksList.filter((booksList) => booksList.toLowerCase().includes(queryInput));
  }
}
