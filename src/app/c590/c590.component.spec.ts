import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C590Component } from './c590.component';

describe('C590Component', () => {
  let component: C590Component;
  let fixture: ComponentFixture<C590Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C590Component]
    });
    fixture = TestBed.createComponent(C590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
