import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrenChild1Component } from './view-children-child1.component';

describe('ViewChildrenChild1Component', () => {
  let component: ViewChildrenChild1Component;
  let fixture: ComponentFixture<ViewChildrenChild1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewChildrenChild1Component]
    });
    fixture = TestBed.createComponent(ViewChildrenChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
