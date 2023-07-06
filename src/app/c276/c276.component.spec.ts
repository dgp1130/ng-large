import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C276Component } from './c276.component';

describe('C276Component', () => {
  let component: C276Component;
  let fixture: ComponentFixture<C276Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C276Component]
    });
    fixture = TestBed.createComponent(C276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
