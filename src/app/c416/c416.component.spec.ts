import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C416Component } from './c416.component';

describe('C416Component', () => {
  let component: C416Component;
  let fixture: ComponentFixture<C416Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C416Component]
    });
    fixture = TestBed.createComponent(C416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
