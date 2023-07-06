import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C238Component } from './c238.component';

describe('C238Component', () => {
  let component: C238Component;
  let fixture: ComponentFixture<C238Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C238Component]
    });
    fixture = TestBed.createComponent(C238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
