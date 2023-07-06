import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C341Component } from './c341.component';

describe('C341Component', () => {
  let component: C341Component;
  let fixture: ComponentFixture<C341Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C341Component]
    });
    fixture = TestBed.createComponent(C341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
