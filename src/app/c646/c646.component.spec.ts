import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C646Component } from './c646.component';

describe('C646Component', () => {
  let component: C646Component;
  let fixture: ComponentFixture<C646Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C646Component]
    });
    fixture = TestBed.createComponent(C646Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
