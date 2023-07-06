import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C237Component } from './c237.component';

describe('C237Component', () => {
  let component: C237Component;
  let fixture: ComponentFixture<C237Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C237Component]
    });
    fixture = TestBed.createComponent(C237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
