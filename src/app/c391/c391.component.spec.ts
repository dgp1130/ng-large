import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C391Component } from './c391.component';

describe('C391Component', () => {
  let component: C391Component;
  let fixture: ComponentFixture<C391Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C391Component]
    });
    fixture = TestBed.createComponent(C391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
