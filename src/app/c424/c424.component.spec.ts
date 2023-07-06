import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C424Component } from './c424.component';

describe('C424Component', () => {
  let component: C424Component;
  let fixture: ComponentFixture<C424Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C424Component]
    });
    fixture = TestBed.createComponent(C424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
