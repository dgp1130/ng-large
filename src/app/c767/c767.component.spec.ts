import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C767Component } from './c767.component';

describe('C767Component', () => {
  let component: C767Component;
  let fixture: ComponentFixture<C767Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C767Component]
    });
    fixture = TestBed.createComponent(C767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
