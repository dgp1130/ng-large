import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C879Component } from './c879.component';

describe('C879Component', () => {
  let component: C879Component;
  let fixture: ComponentFixture<C879Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C879Component]
    });
    fixture = TestBed.createComponent(C879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
