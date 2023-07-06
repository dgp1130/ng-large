import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C595Component } from './c595.component';

describe('C595Component', () => {
  let component: C595Component;
  let fixture: ComponentFixture<C595Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C595Component]
    });
    fixture = TestBed.createComponent(C595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
