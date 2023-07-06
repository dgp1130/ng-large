import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C563Component } from './c563.component';

describe('C563Component', () => {
  let component: C563Component;
  let fixture: ComponentFixture<C563Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C563Component]
    });
    fixture = TestBed.createComponent(C563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
