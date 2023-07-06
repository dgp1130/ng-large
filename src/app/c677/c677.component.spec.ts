import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C677Component } from './c677.component';

describe('C677Component', () => {
  let component: C677Component;
  let fixture: ComponentFixture<C677Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C677Component]
    });
    fixture = TestBed.createComponent(C677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
