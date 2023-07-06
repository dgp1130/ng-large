import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C459Component } from './c459.component';

describe('C459Component', () => {
  let component: C459Component;
  let fixture: ComponentFixture<C459Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C459Component]
    });
    fixture = TestBed.createComponent(C459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
