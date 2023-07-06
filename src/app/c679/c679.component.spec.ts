import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C679Component } from './c679.component';

describe('C679Component', () => {
  let component: C679Component;
  let fixture: ComponentFixture<C679Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C679Component]
    });
    fixture = TestBed.createComponent(C679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
