import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C437Component } from './c437.component';

describe('C437Component', () => {
  let component: C437Component;
  let fixture: ComponentFixture<C437Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C437Component]
    });
    fixture = TestBed.createComponent(C437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
