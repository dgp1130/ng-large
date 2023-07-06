import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C574Component } from './c574.component';

describe('C574Component', () => {
  let component: C574Component;
  let fixture: ComponentFixture<C574Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C574Component]
    });
    fixture = TestBed.createComponent(C574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
