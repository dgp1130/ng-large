import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C861Component } from './c861.component';

describe('C861Component', () => {
  let component: C861Component;
  let fixture: ComponentFixture<C861Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C861Component]
    });
    fixture = TestBed.createComponent(C861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
