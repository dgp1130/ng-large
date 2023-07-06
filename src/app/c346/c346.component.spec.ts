import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C346Component } from './c346.component';

describe('C346Component', () => {
  let component: C346Component;
  let fixture: ComponentFixture<C346Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C346Component]
    });
    fixture = TestBed.createComponent(C346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
