import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C775Component } from './c775.component';

describe('C775Component', () => {
  let component: C775Component;
  let fixture: ComponentFixture<C775Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C775Component]
    });
    fixture = TestBed.createComponent(C775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
