import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C534Component } from './c534.component';

describe('C534Component', () => {
  let component: C534Component;
  let fixture: ComponentFixture<C534Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C534Component]
    });
    fixture = TestBed.createComponent(C534Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
