import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C349Component } from './c349.component';

describe('C349Component', () => {
  let component: C349Component;
  let fixture: ComponentFixture<C349Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C349Component]
    });
    fixture = TestBed.createComponent(C349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
