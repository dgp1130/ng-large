import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C17Component } from './c17.component';

describe('C17Component', () => {
  let component: C17Component;
  let fixture: ComponentFixture<C17Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C17Component]
    });
    fixture = TestBed.createComponent(C17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
