import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C475Component } from './c475.component';

describe('C475Component', () => {
  let component: C475Component;
  let fixture: ComponentFixture<C475Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C475Component]
    });
    fixture = TestBed.createComponent(C475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
