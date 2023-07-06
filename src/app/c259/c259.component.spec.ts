import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C259Component } from './c259.component';

describe('C259Component', () => {
  let component: C259Component;
  let fixture: ComponentFixture<C259Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C259Component]
    });
    fixture = TestBed.createComponent(C259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
