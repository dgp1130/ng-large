import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C139Component } from './c139.component';

describe('C139Component', () => {
  let component: C139Component;
  let fixture: ComponentFixture<C139Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C139Component]
    });
    fixture = TestBed.createComponent(C139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
