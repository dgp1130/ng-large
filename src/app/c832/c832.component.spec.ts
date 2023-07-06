import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C832Component } from './c832.component';

describe('C832Component', () => {
  let component: C832Component;
  let fixture: ComponentFixture<C832Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C832Component]
    });
    fixture = TestBed.createComponent(C832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
