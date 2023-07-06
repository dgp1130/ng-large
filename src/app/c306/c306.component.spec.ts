import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C306Component } from './c306.component';

describe('C306Component', () => {
  let component: C306Component;
  let fixture: ComponentFixture<C306Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C306Component]
    });
    fixture = TestBed.createComponent(C306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
