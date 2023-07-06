import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C440Component } from './c440.component';

describe('C440Component', () => {
  let component: C440Component;
  let fixture: ComponentFixture<C440Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C440Component]
    });
    fixture = TestBed.createComponent(C440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
