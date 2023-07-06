import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C695Component } from './c695.component';

describe('C695Component', () => {
  let component: C695Component;
  let fixture: ComponentFixture<C695Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C695Component]
    });
    fixture = TestBed.createComponent(C695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
