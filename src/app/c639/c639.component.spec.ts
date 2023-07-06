import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C639Component } from './c639.component';

describe('C639Component', () => {
  let component: C639Component;
  let fixture: ComponentFixture<C639Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C639Component]
    });
    fixture = TestBed.createComponent(C639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
