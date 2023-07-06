import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C301Component } from './c301.component';

describe('C301Component', () => {
  let component: C301Component;
  let fixture: ComponentFixture<C301Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C301Component]
    });
    fixture = TestBed.createComponent(C301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
