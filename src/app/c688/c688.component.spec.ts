import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C688Component } from './c688.component';

describe('C688Component', () => {
  let component: C688Component;
  let fixture: ComponentFixture<C688Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C688Component]
    });
    fixture = TestBed.createComponent(C688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
