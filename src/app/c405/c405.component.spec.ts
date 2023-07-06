import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C405Component } from './c405.component';

describe('C405Component', () => {
  let component: C405Component;
  let fixture: ComponentFixture<C405Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C405Component]
    });
    fixture = TestBed.createComponent(C405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
