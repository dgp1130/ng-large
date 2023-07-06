import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C400Component } from './c400.component';

describe('C400Component', () => {
  let component: C400Component;
  let fixture: ComponentFixture<C400Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C400Component]
    });
    fixture = TestBed.createComponent(C400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
