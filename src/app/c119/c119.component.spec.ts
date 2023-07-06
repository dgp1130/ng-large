import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C119Component } from './c119.component';

describe('C119Component', () => {
  let component: C119Component;
  let fixture: ComponentFixture<C119Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C119Component]
    });
    fixture = TestBed.createComponent(C119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
