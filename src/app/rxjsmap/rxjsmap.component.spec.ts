import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsmapComponent } from './rxjsmap.component';

describe('RxjsmapComponent', () => {
  let component: RxjsmapComponent;
  let fixture: ComponentFixture<RxjsmapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsmapComponent]
    });
    fixture = TestBed.createComponent(RxjsmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
