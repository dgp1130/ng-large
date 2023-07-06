import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C782Component } from './c782.component';

describe('C782Component', () => {
  let component: C782Component;
  let fixture: ComponentFixture<C782Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C782Component]
    });
    fixture = TestBed.createComponent(C782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
