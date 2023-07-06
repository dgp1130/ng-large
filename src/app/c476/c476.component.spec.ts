import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C476Component } from './c476.component';

describe('C476Component', () => {
  let component: C476Component;
  let fixture: ComponentFixture<C476Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C476Component]
    });
    fixture = TestBed.createComponent(C476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
