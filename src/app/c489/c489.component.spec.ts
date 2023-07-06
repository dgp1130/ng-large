import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C489Component } from './c489.component';

describe('C489Component', () => {
  let component: C489Component;
  let fixture: ComponentFixture<C489Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C489Component]
    });
    fixture = TestBed.createComponent(C489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
