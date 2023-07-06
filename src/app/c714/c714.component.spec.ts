import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C714Component } from './c714.component';

describe('C714Component', () => {
  let component: C714Component;
  let fixture: ComponentFixture<C714Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C714Component]
    });
    fixture = TestBed.createComponent(C714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
