import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C526Component } from './c526.component';

describe('C526Component', () => {
  let component: C526Component;
  let fixture: ComponentFixture<C526Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C526Component]
    });
    fixture = TestBed.createComponent(C526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
