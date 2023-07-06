import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C959Component } from './c959.component';

describe('C959Component', () => {
  let component: C959Component;
  let fixture: ComponentFixture<C959Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C959Component]
    });
    fixture = TestBed.createComponent(C959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
