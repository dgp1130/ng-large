import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C201Component } from './c201.component';

describe('C201Component', () => {
  let component: C201Component;
  let fixture: ComponentFixture<C201Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C201Component]
    });
    fixture = TestBed.createComponent(C201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
