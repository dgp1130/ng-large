import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C304Component } from './c304.component';

describe('C304Component', () => {
  let component: C304Component;
  let fixture: ComponentFixture<C304Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C304Component]
    });
    fixture = TestBed.createComponent(C304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
