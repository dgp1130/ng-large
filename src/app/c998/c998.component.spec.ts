import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C998Component } from './c998.component';

describe('C998Component', () => {
  let component: C998Component;
  let fixture: ComponentFixture<C998Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C998Component]
    });
    fixture = TestBed.createComponent(C998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
