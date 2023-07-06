import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C90Component } from './c90.component';

describe('C90Component', () => {
  let component: C90Component;
  let fixture: ComponentFixture<C90Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C90Component]
    });
    fixture = TestBed.createComponent(C90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
