import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C744Component } from './c744.component';

describe('C744Component', () => {
  let component: C744Component;
  let fixture: ComponentFixture<C744Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C744Component]
    });
    fixture = TestBed.createComponent(C744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
