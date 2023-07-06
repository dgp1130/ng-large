import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C383Component } from './c383.component';

describe('C383Component', () => {
  let component: C383Component;
  let fixture: ComponentFixture<C383Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C383Component]
    });
    fixture = TestBed.createComponent(C383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
