import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C446Component } from './c446.component';

describe('C446Component', () => {
  let component: C446Component;
  let fixture: ComponentFixture<C446Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C446Component]
    });
    fixture = TestBed.createComponent(C446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
