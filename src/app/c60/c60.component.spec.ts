import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C60Component } from './c60.component';

describe('C60Component', () => {
  let component: C60Component;
  let fixture: ComponentFixture<C60Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C60Component]
    });
    fixture = TestBed.createComponent(C60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
