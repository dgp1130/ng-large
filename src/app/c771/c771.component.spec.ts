import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C771Component } from './c771.component';

describe('C771Component', () => {
  let component: C771Component;
  let fixture: ComponentFixture<C771Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C771Component]
    });
    fixture = TestBed.createComponent(C771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
