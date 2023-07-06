import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C89Component } from './c89.component';

describe('C89Component', () => {
  let component: C89Component;
  let fixture: ComponentFixture<C89Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C89Component]
    });
    fixture = TestBed.createComponent(C89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
