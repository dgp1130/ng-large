import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C858Component } from './c858.component';

describe('C858Component', () => {
  let component: C858Component;
  let fixture: ComponentFixture<C858Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C858Component]
    });
    fixture = TestBed.createComponent(C858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
