import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C797Component } from './c797.component';

describe('C797Component', () => {
  let component: C797Component;
  let fixture: ComponentFixture<C797Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C797Component]
    });
    fixture = TestBed.createComponent(C797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
