import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C505Component } from './c505.component';

describe('C505Component', () => {
  let component: C505Component;
  let fixture: ComponentFixture<C505Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C505Component]
    });
    fixture = TestBed.createComponent(C505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
