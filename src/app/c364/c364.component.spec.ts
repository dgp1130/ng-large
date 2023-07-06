import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C364Component } from './c364.component';

describe('C364Component', () => {
  let component: C364Component;
  let fixture: ComponentFixture<C364Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C364Component]
    });
    fixture = TestBed.createComponent(C364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
