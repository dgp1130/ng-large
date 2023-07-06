import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C956Component } from './c956.component';

describe('C956Component', () => {
  let component: C956Component;
  let fixture: ComponentFixture<C956Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C956Component]
    });
    fixture = TestBed.createComponent(C956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
