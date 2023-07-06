import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C543Component } from './c543.component';

describe('C543Component', () => {
  let component: C543Component;
  let fixture: ComponentFixture<C543Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C543Component]
    });
    fixture = TestBed.createComponent(C543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
