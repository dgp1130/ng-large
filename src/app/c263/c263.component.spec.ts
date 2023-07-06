import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C263Component } from './c263.component';

describe('C263Component', () => {
  let component: C263Component;
  let fixture: ComponentFixture<C263Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C263Component]
    });
    fixture = TestBed.createComponent(C263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
