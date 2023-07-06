import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C549Component } from './c549.component';

describe('C549Component', () => {
  let component: C549Component;
  let fixture: ComponentFixture<C549Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C549Component]
    });
    fixture = TestBed.createComponent(C549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
