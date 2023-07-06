import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C750Component } from './c750.component';

describe('C750Component', () => {
  let component: C750Component;
  let fixture: ComponentFixture<C750Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C750Component]
    });
    fixture = TestBed.createComponent(C750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
