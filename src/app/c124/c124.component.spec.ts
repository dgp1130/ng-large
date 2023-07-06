import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C124Component } from './c124.component';

describe('C124Component', () => {
  let component: C124Component;
  let fixture: ComponentFixture<C124Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C124Component]
    });
    fixture = TestBed.createComponent(C124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
