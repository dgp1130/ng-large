import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C848Component } from './c848.component';

describe('C848Component', () => {
  let component: C848Component;
  let fixture: ComponentFixture<C848Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C848Component]
    });
    fixture = TestBed.createComponent(C848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
