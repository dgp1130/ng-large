import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C465Component } from './c465.component';

describe('C465Component', () => {
  let component: C465Component;
  let fixture: ComponentFixture<C465Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C465Component]
    });
    fixture = TestBed.createComponent(C465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
