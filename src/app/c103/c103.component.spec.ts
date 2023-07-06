import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C103Component } from './c103.component';

describe('C103Component', () => {
  let component: C103Component;
  let fixture: ComponentFixture<C103Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C103Component]
    });
    fixture = TestBed.createComponent(C103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
