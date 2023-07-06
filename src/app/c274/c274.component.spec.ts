import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C274Component } from './c274.component';

describe('C274Component', () => {
  let component: C274Component;
  let fixture: ComponentFixture<C274Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C274Component]
    });
    fixture = TestBed.createComponent(C274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
