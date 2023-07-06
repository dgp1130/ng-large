import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C919Component } from './c919.component';

describe('C919Component', () => {
  let component: C919Component;
  let fixture: ComponentFixture<C919Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C919Component]
    });
    fixture = TestBed.createComponent(C919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
