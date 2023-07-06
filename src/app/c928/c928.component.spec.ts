import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C928Component } from './c928.component';

describe('C928Component', () => {
  let component: C928Component;
  let fixture: ComponentFixture<C928Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C928Component]
    });
    fixture = TestBed.createComponent(C928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
