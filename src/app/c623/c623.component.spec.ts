import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C623Component } from './c623.component';

describe('C623Component', () => {
  let component: C623Component;
  let fixture: ComponentFixture<C623Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C623Component]
    });
    fixture = TestBed.createComponent(C623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
