import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListSubComponent } from './employee-list-sub.component';

describe('EmployeeListSubComponent', () => {
  let component: EmployeeListSubComponent;
  let fixture: ComponentFixture<EmployeeListSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeListSubComponent]
    });
    fixture = TestBed.createComponent(EmployeeListSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
