import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C524Component } from './c524.component';

describe('C524Component', () => {
  let component: C524Component;
  let fixture: ComponentFixture<C524Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C524Component]
    });
    fixture = TestBed.createComponent(C524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
