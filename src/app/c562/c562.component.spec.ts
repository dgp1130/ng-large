import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C562Component } from './c562.component';

describe('C562Component', () => {
  let component: C562Component;
  let fixture: ComponentFixture<C562Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C562Component]
    });
    fixture = TestBed.createComponent(C562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
