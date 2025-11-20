import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeeArrayComponent } from './emplyee-array.component';

describe('EmplyeeArrayComponent', () => {
  let component: EmplyeeArrayComponent;
  let fixture: ComponentFixture<EmplyeeArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmplyeeArrayComponent]
    });
    fixture = TestBed.createComponent(EmplyeeArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
