import { Injectable } from '@angular/core';
import { BookSearchApiService } from './book-search-api.service';
import { BookSearchCacheServiceService } from './book-search-cache-service.service';
import { Books } from 'src/app/models/books.mode';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {
    constructor(
    private api: BookSearchApiService,
    private cache: BookSearchCacheServiceService
  ) {}

  search(query: string): Books[] {
    // 1. Check cache
    const cached = this.cache.get(query);
    if (cached) {
      console.log('Returning from Cache');
      return cached;
    }

    // 2. API search
    const result = this.api.search(query);

    // 3. Store in cache
    this.cache.set(query, result);

    console.log('Returning from API');
    return result;
  }
}
