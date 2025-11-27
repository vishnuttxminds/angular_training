import { TestBed } from '@angular/core/testing';

import { BookSearchCacheServiceService } from './book-search-cache-service.service';

describe('BookSearchCacheServiceService', () => {
  let service: BookSearchCacheServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookSearchCacheServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
