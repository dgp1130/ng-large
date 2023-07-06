import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C123Component } from './c123.component';

describe('C123Component', () => {
  let component: C123Component;
  let fixture: ComponentFixture<C123Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C123Component]
    });
    fixture = TestBed.createComponent(C123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
