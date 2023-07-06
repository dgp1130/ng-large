import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C686Component } from './c686.component';

describe('C686Component', () => {
  let component: C686Component;
  let fixture: ComponentFixture<C686Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C686Component]
    });
    fixture = TestBed.createComponent(C686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
