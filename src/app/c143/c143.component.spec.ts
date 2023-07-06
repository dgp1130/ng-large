import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C143Component } from './c143.component';

describe('C143Component', () => {
  let component: C143Component;
  let fixture: ComponentFixture<C143Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C143Component]
    });
    fixture = TestBed.createComponent(C143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
