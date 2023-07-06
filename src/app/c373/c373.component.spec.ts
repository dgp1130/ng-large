import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C373Component } from './c373.component';

describe('C373Component', () => {
  let component: C373Component;
  let fixture: ComponentFixture<C373Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C373Component]
    });
    fixture = TestBed.createComponent(C373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
