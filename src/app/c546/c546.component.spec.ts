import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C546Component } from './c546.component';

describe('C546Component', () => {
  let component: C546Component;
  let fixture: ComponentFixture<C546Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C546Component]
    });
    fixture = TestBed.createComponent(C546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
