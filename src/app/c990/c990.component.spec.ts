import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C990Component } from './c990.component';

describe('C990Component', () => {
  let component: C990Component;
  let fixture: ComponentFixture<C990Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C990Component]
    });
    fixture = TestBed.createComponent(C990Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
