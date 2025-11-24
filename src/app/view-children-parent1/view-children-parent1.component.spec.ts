import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrenParent1Component } from './view-children-parent1.component';

describe('ViewChildrenParent1Component', () => {
  let component: ViewChildrenParent1Component;
  let fixture: ComponentFixture<ViewChildrenParent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewChildrenParent1Component]
    });
    fixture = TestBed.createComponent(ViewChildrenParent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
