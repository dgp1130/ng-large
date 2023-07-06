import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C366Component } from './c366.component';

describe('C366Component', () => {
  let component: C366Component;
  let fixture: ComponentFixture<C366Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C366Component]
    });
    fixture = TestBed.createComponent(C366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
