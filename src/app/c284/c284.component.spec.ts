import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C284Component } from './c284.component';

describe('C284Component', () => {
  let component: C284Component;
  let fixture: ComponentFixture<C284Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C284Component]
    });
    fixture = TestBed.createComponent(C284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
