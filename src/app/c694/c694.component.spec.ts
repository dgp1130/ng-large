import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C694Component } from './c694.component';

describe('C694Component', () => {
  let component: C694Component;
  let fixture: ComponentFixture<C694Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C694Component]
    });
    fixture = TestBed.createComponent(C694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
