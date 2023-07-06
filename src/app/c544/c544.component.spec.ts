import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C544Component } from './c544.component';

describe('C544Component', () => {
  let component: C544Component;
  let fixture: ComponentFixture<C544Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C544Component]
    });
    fixture = TestBed.createComponent(C544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
