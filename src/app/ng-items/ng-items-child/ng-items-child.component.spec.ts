import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgItemsChildComponent } from './ng-items-child.component';

describe('NgItemsChildComponent', () => {
  let component: NgItemsChildComponent;
  let fixture: ComponentFixture<NgItemsChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgItemsChildComponent]
    });
    fixture = TestBed.createComponent(NgItemsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
