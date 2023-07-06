import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C477Component } from './c477.component';

describe('C477Component', () => {
  let component: C477Component;
  let fixture: ComponentFixture<C477Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C477Component]
    });
    fixture = TestBed.createComponent(C477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
