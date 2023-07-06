import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C609Component } from './c609.component';

describe('C609Component', () => {
  let component: C609Component;
  let fixture: ComponentFixture<C609Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C609Component]
    });
    fixture = TestBed.createComponent(C609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
