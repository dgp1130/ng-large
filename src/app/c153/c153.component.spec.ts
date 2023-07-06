import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C153Component } from './c153.component';

describe('C153Component', () => {
  let component: C153Component;
  let fixture: ComponentFixture<C153Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C153Component]
    });
    fixture = TestBed.createComponent(C153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
