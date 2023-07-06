import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C678Component } from './c678.component';

describe('C678Component', () => {
  let component: C678Component;
  let fixture: ComponentFixture<C678Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C678Component]
    });
    fixture = TestBed.createComponent(C678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
