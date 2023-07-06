import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C818Component } from './c818.component';

describe('C818Component', () => {
  let component: C818Component;
  let fixture: ComponentFixture<C818Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C818Component]
    });
    fixture = TestBed.createComponent(C818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
