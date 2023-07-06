import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C80Component } from './c80.component';

describe('C80Component', () => {
  let component: C80Component;
  let fixture: ComponentFixture<C80Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C80Component]
    });
    fixture = TestBed.createComponent(C80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
