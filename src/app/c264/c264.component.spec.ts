import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C264Component } from './c264.component';

describe('C264Component', () => {
  let component: C264Component;
  let fixture: ComponentFixture<C264Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C264Component]
    });
    fixture = TestBed.createComponent(C264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
