import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C594Component } from './c594.component';

describe('C594Component', () => {
  let component: C594Component;
  let fixture: ComponentFixture<C594Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C594Component]
    });
    fixture = TestBed.createComponent(C594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
