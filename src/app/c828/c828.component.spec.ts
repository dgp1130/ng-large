import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C828Component } from './c828.component';

describe('C828Component', () => {
  let component: C828Component;
  let fixture: ComponentFixture<C828Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C828Component]
    });
    fixture = TestBed.createComponent(C828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
