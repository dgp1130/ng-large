import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C671Component } from './c671.component';

describe('C671Component', () => {
  let component: C671Component;
  let fixture: ComponentFixture<C671Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C671Component]
    });
    fixture = TestBed.createComponent(C671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
