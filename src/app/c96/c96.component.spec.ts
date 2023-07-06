import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C96Component } from './c96.component';

describe('C96Component', () => {
  let component: C96Component;
  let fixture: ComponentFixture<C96Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C96Component]
    });
    fixture = TestBed.createComponent(C96Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
