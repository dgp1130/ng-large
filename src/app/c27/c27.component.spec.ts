import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C27Component } from './c27.component';

describe('C27Component', () => {
  let component: C27Component;
  let fixture: ComponentFixture<C27Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C27Component]
    });
    fixture = TestBed.createComponent(C27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
