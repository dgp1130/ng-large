import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C707Component } from './c707.component';

describe('C707Component', () => {
  let component: C707Component;
  let fixture: ComponentFixture<C707Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C707Component]
    });
    fixture = TestBed.createComponent(C707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
