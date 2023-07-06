import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C769Component } from './c769.component';

describe('C769Component', () => {
  let component: C769Component;
  let fixture: ComponentFixture<C769Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C769Component]
    });
    fixture = TestBed.createComponent(C769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
