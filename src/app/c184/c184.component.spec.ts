import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C184Component } from './c184.component';

describe('C184Component', () => {
  let component: C184Component;
  let fixture: ComponentFixture<C184Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C184Component]
    });
    fixture = TestBed.createComponent(C184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
