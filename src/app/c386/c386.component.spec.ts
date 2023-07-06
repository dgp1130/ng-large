import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C386Component } from './c386.component';

describe('C386Component', () => {
  let component: C386Component;
  let fixture: ComponentFixture<C386Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C386Component]
    });
    fixture = TestBed.createComponent(C386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
