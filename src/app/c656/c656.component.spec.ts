import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C656Component } from './c656.component';

describe('C656Component', () => {
  let component: C656Component;
  let fixture: ComponentFixture<C656Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C656Component]
    });
    fixture = TestBed.createComponent(C656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
