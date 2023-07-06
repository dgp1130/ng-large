import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C235Component } from './c235.component';

describe('C235Component', () => {
  let component: C235Component;
  let fixture: ComponentFixture<C235Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C235Component]
    });
    fixture = TestBed.createComponent(C235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
