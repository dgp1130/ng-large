import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C313Component } from './c313.component';

describe('C313Component', () => {
  let component: C313Component;
  let fixture: ComponentFixture<C313Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C313Component]
    });
    fixture = TestBed.createComponent(C313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
