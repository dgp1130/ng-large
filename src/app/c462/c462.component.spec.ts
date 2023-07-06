import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C462Component } from './c462.component';

describe('C462Component', () => {
  let component: C462Component;
  let fixture: ComponentFixture<C462Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C462Component]
    });
    fixture = TestBed.createComponent(C462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
