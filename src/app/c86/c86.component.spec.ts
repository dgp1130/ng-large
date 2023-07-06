import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C86Component } from './c86.component';

describe('C86Component', () => {
  let component: C86Component;
  let fixture: ComponentFixture<C86Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C86Component]
    });
    fixture = TestBed.createComponent(C86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
