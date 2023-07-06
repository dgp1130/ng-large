import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C878Component } from './c878.component';

describe('C878Component', () => {
  let component: C878Component;
  let fixture: ComponentFixture<C878Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C878Component]
    });
    fixture = TestBed.createComponent(C878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
