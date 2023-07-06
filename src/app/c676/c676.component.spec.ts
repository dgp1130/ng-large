import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C676Component } from './c676.component';

describe('C676Component', () => {
  let component: C676Component;
  let fixture: ComponentFixture<C676Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C676Component]
    });
    fixture = TestBed.createComponent(C676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
