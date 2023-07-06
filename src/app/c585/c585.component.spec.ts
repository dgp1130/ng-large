import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C585Component } from './c585.component';

describe('C585Component', () => {
  let component: C585Component;
  let fixture: ComponentFixture<C585Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C585Component]
    });
    fixture = TestBed.createComponent(C585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
