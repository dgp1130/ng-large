import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C186Component } from './c186.component';

describe('C186Component', () => {
  let component: C186Component;
  let fixture: ComponentFixture<C186Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C186Component]
    });
    fixture = TestBed.createComponent(C186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
