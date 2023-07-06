import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C901Component } from './c901.component';

describe('C901Component', () => {
  let component: C901Component;
  let fixture: ComponentFixture<C901Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C901Component]
    });
    fixture = TestBed.createComponent(C901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
