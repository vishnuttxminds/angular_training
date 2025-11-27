import { Injectable } from '@angular/core';
import { Books } from 'src/app/models/books.mode';

@Injectable({
  providedIn: 'root',
})
export class BookSearchApiService {
  private booksList: Books[] = [
    { id: 1, name: 'Book - 1' },
    { id: 2, name: 'Book - 2' },
    { id: 3, name: 'Book - 3' },
    { id: 4, name: 'Book - 4' },
    { id: 5, name: 'Book - 5' },
    { id: 6, name: 'Book - 6' },
  ];

   search(query: string): Books[] {
    const q = query.toLowerCase();
    return this.booksList.filter(
      b => b.name.toLowerCase().includes(q)
    );
  }
}
