import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C854Component } from './c854.component';

describe('C854Component', () => {
  let component: C854Component;
  let fixture: ComponentFixture<C854Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C854Component]
    });
    fixture = TestBed.createComponent(C854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
