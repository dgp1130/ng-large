import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C67Component } from './c67.component';

describe('C67Component', () => {
  let component: C67Component;
  let fixture: ComponentFixture<C67Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C67Component]
    });
    fixture = TestBed.createComponent(C67Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
