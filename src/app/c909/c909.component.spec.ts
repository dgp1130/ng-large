import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C909Component } from './c909.component';

describe('C909Component', () => {
  let component: C909Component;
  let fixture: ComponentFixture<C909Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C909Component]
    });
    fixture = TestBed.createComponent(C909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
