import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C32Component } from './c32.component';

describe('C32Component', () => {
  let component: C32Component;
  let fixture: ComponentFixture<C32Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C32Component]
    });
    fixture = TestBed.createComponent(C32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
