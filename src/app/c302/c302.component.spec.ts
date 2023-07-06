import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C302Component } from './c302.component';

describe('C302Component', () => {
  let component: C302Component;
  let fixture: ComponentFixture<C302Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C302Component]
    });
    fixture = TestBed.createComponent(C302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
