import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C863Component } from './c863.component';

describe('C863Component', () => {
  let component: C863Component;
  let fixture: ComponentFixture<C863Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C863Component]
    });
    fixture = TestBed.createComponent(C863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
