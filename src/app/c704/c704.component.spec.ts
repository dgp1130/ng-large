import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C704Component } from './c704.component';

describe('C704Component', () => {
  let component: C704Component;
  let fixture: ComponentFixture<C704Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C704Component]
    });
    fixture = TestBed.createComponent(C704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
