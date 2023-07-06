import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C886Component } from './c886.component';

describe('C886Component', () => {
  let component: C886Component;
  let fixture: ComponentFixture<C886Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C886Component]
    });
    fixture = TestBed.createComponent(C886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
