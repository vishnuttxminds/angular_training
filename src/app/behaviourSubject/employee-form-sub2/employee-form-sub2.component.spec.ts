import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormSub2Component } from './employee-form-sub2.component';

describe('EmployeeFormSub2Component', () => {
  let component: EmployeeFormSub2Component;
  let fixture: ComponentFixture<EmployeeFormSub2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeFormSub2Component]
    });
    fixture = TestBed.createComponent(EmployeeFormSub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
