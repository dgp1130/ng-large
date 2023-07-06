import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C661Component } from './c661.component';

describe('C661Component', () => {
  let component: C661Component;
  let fixture: ComponentFixture<C661Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C661Component]
    });
    fixture = TestBed.createComponent(C661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
