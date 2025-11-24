import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSerachComponent } from './book-serach.component';

describe('BookSerachComponent', () => {
  let component: BookSerachComponent;
  let fixture: ComponentFixture<BookSerachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookSerachComponent]
    });
    fixture = TestBed.createComponent(BookSerachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
