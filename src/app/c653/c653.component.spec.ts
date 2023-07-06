import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C653Component } from './c653.component';

describe('C653Component', () => {
  let component: C653Component;
  let fixture: ComponentFixture<C653Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C653Component]
    });
    fixture = TestBed.createComponent(C653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
