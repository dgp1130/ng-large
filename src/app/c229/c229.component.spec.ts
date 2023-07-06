import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C229Component } from './c229.component';

describe('C229Component', () => {
  let component: C229Component;
  let fixture: ComponentFixture<C229Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C229Component]
    });
    fixture = TestBed.createComponent(C229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
