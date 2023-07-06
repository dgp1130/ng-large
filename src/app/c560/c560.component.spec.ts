import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C560Component } from './c560.component';

describe('C560Component', () => {
  let component: C560Component;
  let fixture: ComponentFixture<C560Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C560Component]
    });
    fixture = TestBed.createComponent(C560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
