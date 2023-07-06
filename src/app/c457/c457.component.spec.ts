import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C457Component } from './c457.component';

describe('C457Component', () => {
  let component: C457Component;
  let fixture: ComponentFixture<C457Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C457Component]
    });
    fixture = TestBed.createComponent(C457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
