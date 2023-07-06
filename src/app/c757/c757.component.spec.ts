import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C757Component } from './c757.component';

describe('C757Component', () => {
  let component: C757Component;
  let fixture: ComponentFixture<C757Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C757Component]
    });
    fixture = TestBed.createComponent(C757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
