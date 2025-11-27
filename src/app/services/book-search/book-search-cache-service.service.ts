import { Injectable } from '@angular/core';
import { Books } from 'src/app/models/books.mode';

@Injectable({
  providedIn: 'root'
})
export class BookSearchCacheServiceService {

   private cache = new Map<string, Books[]>();

  get(query: string): Books[] | undefined {
    return this.cache.get(query);
  }

  set(query: string, results: Books[]): void {
    this.cache.set(query, results);
  }
}
