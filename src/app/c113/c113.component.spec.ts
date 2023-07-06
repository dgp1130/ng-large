import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C113Component } from './c113.component';

describe('C113Component', () => {
  let component: C113Component;
  let fixture: ComponentFixture<C113Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C113Component]
    });
    fixture = TestBed.createComponent(C113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
