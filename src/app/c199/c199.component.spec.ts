import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C199Component } from './c199.component';

describe('C199Component', () => {
  let component: C199Component;
  let fixture: ComponentFixture<C199Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C199Component]
    });
    fixture = TestBed.createComponent(C199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
