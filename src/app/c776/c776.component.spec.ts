import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C776Component } from './c776.component';

describe('C776Component', () => {
  let component: C776Component;
  let fixture: ComponentFixture<C776Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C776Component]
    });
    fixture = TestBed.createComponent(C776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
