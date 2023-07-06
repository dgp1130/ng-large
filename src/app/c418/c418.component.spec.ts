import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C418Component } from './c418.component';

describe('C418Component', () => {
  let component: C418Component;
  let fixture: ComponentFixture<C418Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C418Component]
    });
    fixture = TestBed.createComponent(C418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
