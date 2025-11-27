import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookSearchCacheServiceService {

   private cache = new Map<string, string[]>();

  get(query: string): string[] | undefined {
    return this.cache.get(query);
  }

  set(query: string, results: string[]): void {
    this.cache.set(query, results);
  }
}
