import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C88Component } from './c88.component';

describe('C88Component', () => {
  let component: C88Component;
  let fixture: ComponentFixture<C88Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C88Component]
    });
    fixture = TestBed.createComponent(C88Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
