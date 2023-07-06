import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C814Component } from './c814.component';

describe('C814Component', () => {
  let component: C814Component;
  let fixture: ComponentFixture<C814Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C814Component]
    });
    fixture = TestBed.createComponent(C814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
