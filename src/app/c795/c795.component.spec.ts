import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C795Component } from './c795.component';

describe('C795Component', () => {
  let component: C795Component;
  let fixture: ComponentFixture<C795Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C795Component]
    });
    fixture = TestBed.createComponent(C795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
