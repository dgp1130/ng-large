import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C529Component } from './c529.component';

describe('C529Component', () => {
  let component: C529Component;
  let fixture: ComponentFixture<C529Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C529Component]
    });
    fixture = TestBed.createComponent(C529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
