import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C379Component } from './c379.component';

describe('C379Component', () => {
  let component: C379Component;
  let fixture: ComponentFixture<C379Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C379Component]
    });
    fixture = TestBed.createComponent(C379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
