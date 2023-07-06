import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C668Component } from './c668.component';

describe('C668Component', () => {
  let component: C668Component;
  let fixture: ComponentFixture<C668Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C668Component]
    });
    fixture = TestBed.createComponent(C668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
