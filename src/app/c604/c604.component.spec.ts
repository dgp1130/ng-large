import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C604Component } from './c604.component';

describe('C604Component', () => {
  let component: C604Component;
  let fixture: ComponentFixture<C604Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C604Component]
    });
    fixture = TestBed.createComponent(C604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
