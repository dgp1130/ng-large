import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C745Component } from './c745.component';

describe('C745Component', () => {
  let component: C745Component;
  let fixture: ComponentFixture<C745Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C745Component]
    });
    fixture = TestBed.createComponent(C745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
