import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C953Component } from './c953.component';

describe('C953Component', () => {
  let component: C953Component;
  let fixture: ComponentFixture<C953Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C953Component]
    });
    fixture = TestBed.createComponent(C953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
