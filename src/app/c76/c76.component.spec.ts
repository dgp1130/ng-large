import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C76Component } from './c76.component';

describe('C76Component', () => {
  let component: C76Component;
  let fixture: ComponentFixture<C76Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C76Component]
    });
    fixture = TestBed.createComponent(C76Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
