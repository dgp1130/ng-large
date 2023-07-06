import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C331Component } from './c331.component';

describe('C331Component', () => {
  let component: C331Component;
  let fixture: ComponentFixture<C331Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C331Component]
    });
    fixture = TestBed.createComponent(C331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
