import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C697Component } from './c697.component';

describe('C697Component', () => {
  let component: C697Component;
  let fixture: ComponentFixture<C697Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C697Component]
    });
    fixture = TestBed.createComponent(C697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
