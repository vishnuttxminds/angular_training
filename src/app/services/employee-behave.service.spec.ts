import { TestBed } from '@angular/core/testing';

import { EmployeeBehaveService } from './employee-behave.service';

describe('EmployeeBehaveService', () => {
  let service: EmployeeBehaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeBehaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
