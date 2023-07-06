import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C265Component } from './c265.component';

describe('C265Component', () => {
  let component: C265Component;
  let fixture: ComponentFixture<C265Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C265Component]
    });
    fixture = TestBed.createComponent(C265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
