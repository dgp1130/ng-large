import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C674Component } from './c674.component';

describe('C674Component', () => {
  let component: C674Component;
  let fixture: ComponentFixture<C674Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C674Component]
    });
    fixture = TestBed.createComponent(C674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
