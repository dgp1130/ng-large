import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C920Component } from './c920.component';

describe('C920Component', () => {
  let component: C920Component;
  let fixture: ComponentFixture<C920Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C920Component]
    });
    fixture = TestBed.createComponent(C920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
