import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C417Component } from './c417.component';

describe('C417Component', () => {
  let component: C417Component;
  let fixture: ComponentFixture<C417Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C417Component]
    });
    fixture = TestBed.createComponent(C417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
