import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C343Component } from './c343.component';

describe('C343Component', () => {
  let component: C343Component;
  let fixture: ComponentFixture<C343Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C343Component]
    });
    fixture = TestBed.createComponent(C343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
