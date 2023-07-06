import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C320Component } from './c320.component';

describe('C320Component', () => {
  let component: C320Component;
  let fixture: ComponentFixture<C320Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C320Component]
    });
    fixture = TestBed.createComponent(C320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
