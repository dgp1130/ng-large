import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C491Component } from './c491.component';

describe('C491Component', () => {
  let component: C491Component;
  let fixture: ComponentFixture<C491Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C491Component]
    });
    fixture = TestBed.createComponent(C491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
