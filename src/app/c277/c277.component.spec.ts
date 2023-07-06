import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C277Component } from './c277.component';

describe('C277Component', () => {
  let component: C277Component;
  let fixture: ComponentFixture<C277Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C277Component]
    });
    fixture = TestBed.createComponent(C277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
