import { Injectable } from '@angular/core';
import { BookSearchApiService } from './book-search-api.service';
import { BookSearchCacheServiceService } from './book-search-cache-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {
    constructor(
    private api: BookSearchApiService,
    private cache: BookSearchCacheServiceService
  ) {}

  search(inputQuery: string): string[] {
    const cachedResult = this.cache.get(inputQuery);
    if (cachedResult) {
      console.log('Returning from Cache');
      return cachedResult;
    }
    const result = this.api.search(inputQuery);
    this.cache.set(inputQuery, result);

    console.log('Returning from API');
    return result;
  }
}
