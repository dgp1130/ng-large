import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C608Component } from './c608.component';

describe('C608Component', () => {
  let component: C608Component;
  let fixture: ComponentFixture<C608Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C608Component]
    });
    fixture = TestBed.createComponent(C608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
