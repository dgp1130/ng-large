import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C876Component } from './c876.component';

describe('C876Component', () => {
  let component: C876Component;
  let fixture: ComponentFixture<C876Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C876Component]
    });
    fixture = TestBed.createComponent(C876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
