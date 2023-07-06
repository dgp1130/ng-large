import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C95Component } from './c95.component';

describe('C95Component', () => {
  let component: C95Component;
  let fixture: ComponentFixture<C95Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C95Component]
    });
    fixture = TestBed.createComponent(C95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
