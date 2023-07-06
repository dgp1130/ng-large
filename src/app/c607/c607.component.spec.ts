import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C607Component } from './c607.component';

describe('C607Component', () => {
  let component: C607Component;
  let fixture: ComponentFixture<C607Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C607Component]
    });
    fixture = TestBed.createComponent(C607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
