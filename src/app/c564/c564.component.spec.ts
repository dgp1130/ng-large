import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C564Component } from './c564.component';

describe('C564Component', () => {
  let component: C564Component;
  let fixture: ComponentFixture<C564Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C564Component]
    });
    fixture = TestBed.createComponent(C564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
