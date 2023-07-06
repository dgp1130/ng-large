import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C137Component } from './c137.component';

describe('C137Component', () => {
  let component: C137Component;
  let fixture: ComponentFixture<C137Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C137Component]
    });
    fixture = TestBed.createComponent(C137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
