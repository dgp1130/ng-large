import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C497Component } from './c497.component';

describe('C497Component', () => {
  let component: C497Component;
  let fixture: ComponentFixture<C497Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C497Component]
    });
    fixture = TestBed.createComponent(C497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
