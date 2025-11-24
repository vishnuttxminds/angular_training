import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgItemsComponent } from './ng-items.component';

describe('NgItemsComponent', () => {
  let component: NgItemsComponent;
  let fixture: ComponentFixture<NgItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgItemsComponent]
    });
    fixture = TestBed.createComponent(NgItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
