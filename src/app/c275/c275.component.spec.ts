import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C275Component } from './c275.component';

describe('C275Component', () => {
  let component: C275Component;
  let fixture: ComponentFixture<C275Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C275Component]
    });
    fixture = TestBed.createComponent(C275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
