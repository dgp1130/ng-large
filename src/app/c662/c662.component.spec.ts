import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C662Component } from './c662.component';

describe('C662Component', () => {
  let component: C662Component;
  let fixture: ComponentFixture<C662Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C662Component]
    });
    fixture = TestBed.createComponent(C662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
