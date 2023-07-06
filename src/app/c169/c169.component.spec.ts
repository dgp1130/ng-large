import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C169Component } from './c169.component';

describe('C169Component', () => {
  let component: C169Component;
  let fixture: ComponentFixture<C169Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C169Component]
    });
    fixture = TestBed.createComponent(C169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
