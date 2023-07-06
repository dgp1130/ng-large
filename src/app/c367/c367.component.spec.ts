import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C367Component } from './c367.component';

describe('C367Component', () => {
  let component: C367Component;
  let fixture: ComponentFixture<C367Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C367Component]
    });
    fixture = TestBed.createComponent(C367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
