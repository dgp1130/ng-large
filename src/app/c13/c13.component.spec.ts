import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13Component } from './c13.component';

describe('C13Component', () => {
  let component: C13Component;
  let fixture: ComponentFixture<C13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C13Component]
    });
    fixture = TestBed.createComponent(C13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
