import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C20Component } from './c20.component';

describe('C20Component', () => {
  let component: C20Component;
  let fixture: ComponentFixture<C20Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C20Component]
    });
    fixture = TestBed.createComponent(C20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
