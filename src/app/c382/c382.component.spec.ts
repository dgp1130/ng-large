import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C382Component } from './c382.component';

describe('C382Component', () => {
  let component: C382Component;
  let fixture: ComponentFixture<C382Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C382Component]
    });
    fixture = TestBed.createComponent(C382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
