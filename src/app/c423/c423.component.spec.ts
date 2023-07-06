import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C423Component } from './c423.component';

describe('C423Component', () => {
  let component: C423Component;
  let fixture: ComponentFixture<C423Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C423Component]
    });
    fixture = TestBed.createComponent(C423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
