import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C120Component } from './c120.component';

describe('C120Component', () => {
  let component: C120Component;
  let fixture: ComponentFixture<C120Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C120Component]
    });
    fixture = TestBed.createComponent(C120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
