import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C273Component } from './c273.component';

describe('C273Component', () => {
  let component: C273Component;
  let fixture: ComponentFixture<C273Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C273Component]
    });
    fixture = TestBed.createComponent(C273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
