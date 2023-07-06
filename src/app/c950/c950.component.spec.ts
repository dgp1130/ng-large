import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C950Component } from './c950.component';

describe('C950Component', () => {
  let component: C950Component;
  let fixture: ComponentFixture<C950Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C950Component]
    });
    fixture = TestBed.createComponent(C950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
