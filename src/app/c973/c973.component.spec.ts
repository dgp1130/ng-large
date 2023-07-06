import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C973Component } from './c973.component';

describe('C973Component', () => {
  let component: C973Component;
  let fixture: ComponentFixture<C973Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C973Component]
    });
    fixture = TestBed.createComponent(C973Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
