import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C502Component } from './c502.component';

describe('C502Component', () => {
  let component: C502Component;
  let fixture: ComponentFixture<C502Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C502Component]
    });
    fixture = TestBed.createComponent(C502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
