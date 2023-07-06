import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C581Component } from './c581.component';

describe('C581Component', () => {
  let component: C581Component;
  let fixture: ComponentFixture<C581Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C581Component]
    });
    fixture = TestBed.createComponent(C581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
