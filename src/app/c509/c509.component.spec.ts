import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C509Component } from './c509.component';

describe('C509Component', () => {
  let component: C509Component;
  let fixture: ComponentFixture<C509Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C509Component]
    });
    fixture = TestBed.createComponent(C509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
