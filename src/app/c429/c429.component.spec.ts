import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C429Component } from './c429.component';

describe('C429Component', () => {
  let component: C429Component;
  let fixture: ComponentFixture<C429Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C429Component]
    });
    fixture = TestBed.createComponent(C429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
