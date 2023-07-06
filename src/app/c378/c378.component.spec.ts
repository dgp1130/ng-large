import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C378Component } from './c378.component';

describe('C378Component', () => {
  let component: C378Component;
  let fixture: ComponentFixture<C378Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C378Component]
    });
    fixture = TestBed.createComponent(C378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
