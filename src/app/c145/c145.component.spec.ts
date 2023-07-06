import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C145Component } from './c145.component';

describe('C145Component', () => {
  let component: C145Component;
  let fixture: ComponentFixture<C145Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C145Component]
    });
    fixture = TestBed.createComponent(C145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
