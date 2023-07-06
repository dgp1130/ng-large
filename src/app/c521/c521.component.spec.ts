import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C521Component } from './c521.component';

describe('C521Component', () => {
  let component: C521Component;
  let fixture: ComponentFixture<C521Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C521Component]
    });
    fixture = TestBed.createComponent(C521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
