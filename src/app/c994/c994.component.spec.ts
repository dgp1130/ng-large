import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C994Component } from './c994.component';

describe('C994Component', () => {
  let component: C994Component;
  let fixture: ComponentFixture<C994Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C994Component]
    });
    fixture = TestBed.createComponent(C994Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
