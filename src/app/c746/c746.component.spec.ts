import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C746Component } from './c746.component';

describe('C746Component', () => {
  let component: C746Component;
  let fixture: ComponentFixture<C746Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C746Component]
    });
    fixture = TestBed.createComponent(C746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
