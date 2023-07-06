import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C916Component } from './c916.component';

describe('C916Component', () => {
  let component: C916Component;
  let fixture: ComponentFixture<C916Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C916Component]
    });
    fixture = TestBed.createComponent(C916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
