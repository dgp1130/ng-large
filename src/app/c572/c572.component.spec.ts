import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C572Component } from './c572.component';

describe('C572Component', () => {
  let component: C572Component;
  let fixture: ComponentFixture<C572Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C572Component]
    });
    fixture = TestBed.createComponent(C572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
