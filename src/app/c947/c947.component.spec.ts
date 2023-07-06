import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C947Component } from './c947.component';

describe('C947Component', () => {
  let component: C947Component;
  let fixture: ComponentFixture<C947Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C947Component]
    });
    fixture = TestBed.createComponent(C947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
