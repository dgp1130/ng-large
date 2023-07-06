import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C412Component } from './c412.component';

describe('C412Component', () => {
  let component: C412Component;
  let fixture: ComponentFixture<C412Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C412Component]
    });
    fixture = TestBed.createComponent(C412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
