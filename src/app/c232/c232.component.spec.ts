import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C232Component } from './c232.component';

describe('C232Component', () => {
  let component: C232Component;
  let fixture: ComponentFixture<C232Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C232Component]
    });
    fixture = TestBed.createComponent(C232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
