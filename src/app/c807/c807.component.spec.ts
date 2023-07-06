import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C807Component } from './c807.component';

describe('C807Component', () => {
  let component: C807Component;
  let fixture: ComponentFixture<C807Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C807Component]
    });
    fixture = TestBed.createComponent(C807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
