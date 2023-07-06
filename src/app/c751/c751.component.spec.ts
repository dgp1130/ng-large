import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C751Component } from './c751.component';

describe('C751Component', () => {
  let component: C751Component;
  let fixture: ComponentFixture<C751Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C751Component]
    });
    fixture = TestBed.createComponent(C751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
