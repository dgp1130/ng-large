import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C189Component } from './c189.component';

describe('C189Component', () => {
  let component: C189Component;
  let fixture: ComponentFixture<C189Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C189Component]
    });
    fixture = TestBed.createComponent(C189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
