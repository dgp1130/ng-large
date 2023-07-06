import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C939Component } from './c939.component';

describe('C939Component', () => {
  let component: C939Component;
  let fixture: ComponentFixture<C939Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C939Component]
    });
    fixture = TestBed.createComponent(C939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
