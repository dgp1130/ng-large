import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C81Component } from './c81.component';

describe('C81Component', () => {
  let component: C81Component;
  let fixture: ComponentFixture<C81Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C81Component]
    });
    fixture = TestBed.createComponent(C81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
