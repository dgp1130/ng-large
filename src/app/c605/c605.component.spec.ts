import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C605Component } from './c605.component';

describe('C605Component', () => {
  let component: C605Component;
  let fixture: ComponentFixture<C605Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C605Component]
    });
    fixture = TestBed.createComponent(C605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
