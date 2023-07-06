import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C161Component } from './c161.component';

describe('C161Component', () => {
  let component: C161Component;
  let fixture: ComponentFixture<C161Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C161Component]
    });
    fixture = TestBed.createComponent(C161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
