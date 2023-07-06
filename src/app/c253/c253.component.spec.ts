import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C253Component } from './c253.component';

describe('C253Component', () => {
  let component: C253Component;
  let fixture: ComponentFixture<C253Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C253Component]
    });
    fixture = TestBed.createComponent(C253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
