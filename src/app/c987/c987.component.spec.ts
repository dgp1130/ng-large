import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C987Component } from './c987.component';

describe('C987Component', () => {
  let component: C987Component;
  let fixture: ComponentFixture<C987Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C987Component]
    });
    fixture = TestBed.createComponent(C987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
