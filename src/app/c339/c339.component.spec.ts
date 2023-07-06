import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C339Component } from './c339.component';

describe('C339Component', () => {
  let component: C339Component;
  let fixture: ComponentFixture<C339Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C339Component]
    });
    fixture = TestBed.createComponent(C339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
