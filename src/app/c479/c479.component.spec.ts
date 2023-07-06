import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C479Component } from './c479.component';

describe('C479Component', () => {
  let component: C479Component;
  let fixture: ComponentFixture<C479Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C479Component]
    });
    fixture = TestBed.createComponent(C479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
