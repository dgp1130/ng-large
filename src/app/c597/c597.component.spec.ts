import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C597Component } from './c597.component';

describe('C597Component', () => {
  let component: C597Component;
  let fixture: ComponentFixture<C597Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C597Component]
    });
    fixture = TestBed.createComponent(C597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
