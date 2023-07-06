import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C470Component } from './c470.component';

describe('C470Component', () => {
  let component: C470Component;
  let fixture: ComponentFixture<C470Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C470Component]
    });
    fixture = TestBed.createComponent(C470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
