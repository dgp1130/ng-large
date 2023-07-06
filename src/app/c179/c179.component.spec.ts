import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C179Component } from './c179.component';

describe('C179Component', () => {
  let component: C179Component;
  let fixture: ComponentFixture<C179Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C179Component]
    });
    fixture = TestBed.createComponent(C179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
