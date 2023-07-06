import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C215Component } from './c215.component';

describe('C215Component', () => {
  let component: C215Component;
  let fixture: ComponentFixture<C215Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C215Component]
    });
    fixture = TestBed.createComponent(C215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
