import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C796Component } from './c796.component';

describe('C796Component', () => {
  let component: C796Component;
  let fixture: ComponentFixture<C796Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C796Component]
    });
    fixture = TestBed.createComponent(C796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
