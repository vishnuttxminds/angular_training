import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrenParentComponent } from './view-children-parent.component';

describe('ViewChildrenParentComponent', () => {
  let component: ViewChildrenParentComponent;
  let fixture: ComponentFixture<ViewChildrenParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewChildrenParentComponent]
    });
    fixture = TestBed.createComponent(ViewChildrenParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
