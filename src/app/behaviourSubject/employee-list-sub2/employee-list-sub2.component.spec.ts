import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListSub2Component } from './employee-list-sub2.component';

describe('EmployeeListSub2Component', () => {
  let component: EmployeeListSub2Component;
  let fixture: ComponentFixture<EmployeeListSub2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeListSub2Component]
    });
    fixture = TestBed.createComponent(EmployeeListSub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
