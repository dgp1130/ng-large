import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C569Component } from './c569.component';

describe('C569Component', () => {
  let component: C569Component;
  let fixture: ComponentFixture<C569Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C569Component]
    });
    fixture = TestBed.createComponent(C569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
