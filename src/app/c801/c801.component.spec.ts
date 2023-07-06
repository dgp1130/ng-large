import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C801Component } from './c801.component';

describe('C801Component', () => {
  let component: C801Component;
  let fixture: ComponentFixture<C801Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C801Component]
    });
    fixture = TestBed.createComponent(C801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
