import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C282Component } from './c282.component';

describe('C282Component', () => {
  let component: C282Component;
  let fixture: ComponentFixture<C282Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C282Component]
    });
    fixture = TestBed.createComponent(C282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
