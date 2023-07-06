import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C151Component } from './c151.component';

describe('C151Component', () => {
  let component: C151Component;
  let fixture: ComponentFixture<C151Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C151Component]
    });
    fixture = TestBed.createComponent(C151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
