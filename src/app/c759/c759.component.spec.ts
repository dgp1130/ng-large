import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C759Component } from './c759.component';

describe('C759Component', () => {
  let component: C759Component;
  let fixture: ComponentFixture<C759Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C759Component]
    });
    fixture = TestBed.createComponent(C759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
