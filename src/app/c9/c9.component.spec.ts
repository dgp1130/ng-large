import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C9Component } from './c9.component';

describe('C9Component', () => {
  let component: C9Component;
  let fixture: ComponentFixture<C9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C9Component]
    });
    fixture = TestBed.createComponent(C9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
