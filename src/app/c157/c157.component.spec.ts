import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C157Component } from './c157.component';

describe('C157Component', () => {
  let component: C157Component;
  let fixture: ComponentFixture<C157Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C157Component]
    });
    fixture = TestBed.createComponent(C157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
