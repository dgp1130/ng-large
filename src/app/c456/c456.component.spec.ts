import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C456Component } from './c456.component';

describe('C456Component', () => {
  let component: C456Component;
  let fixture: ComponentFixture<C456Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C456Component]
    });
    fixture = TestBed.createComponent(C456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
