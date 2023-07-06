import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C510Component } from './c510.component';

describe('C510Component', () => {
  let component: C510Component;
  let fixture: ComponentFixture<C510Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C510Component]
    });
    fixture = TestBed.createComponent(C510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
