import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C408Component } from './c408.component';

describe('C408Component', () => {
  let component: C408Component;
  let fixture: ComponentFixture<C408Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C408Component]
    });
    fixture = TestBed.createComponent(C408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
