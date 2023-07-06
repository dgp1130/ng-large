import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C658Component } from './c658.component';

describe('C658Component', () => {
  let component: C658Component;
  let fixture: ComponentFixture<C658Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C658Component]
    });
    fixture = TestBed.createComponent(C658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
