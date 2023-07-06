import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C472Component } from './c472.component';

describe('C472Component', () => {
  let component: C472Component;
  let fixture: ComponentFixture<C472Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C472Component]
    });
    fixture = TestBed.createComponent(C472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
