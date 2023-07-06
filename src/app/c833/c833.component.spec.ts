import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C833Component } from './c833.component';

describe('C833Component', () => {
  let component: C833Component;
  let fixture: ComponentFixture<C833Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C833Component]
    });
    fixture = TestBed.createComponent(C833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
