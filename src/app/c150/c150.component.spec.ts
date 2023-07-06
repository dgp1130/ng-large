import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C150Component } from './c150.component';

describe('C150Component', () => {
  let component: C150Component;
  let fixture: ComponentFixture<C150Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C150Component]
    });
    fixture = TestBed.createComponent(C150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
