import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C700Component } from './c700.component';

describe('C700Component', () => {
  let component: C700Component;
  let fixture: ComponentFixture<C700Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C700Component]
    });
    fixture = TestBed.createComponent(C700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
