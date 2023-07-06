import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C214Component } from './c214.component';

describe('C214Component', () => {
  let component: C214Component;
  let fixture: ComponentFixture<C214Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C214Component]
    });
    fixture = TestBed.createComponent(C214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
