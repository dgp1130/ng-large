import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C427Component } from './c427.component';

describe('C427Component', () => {
  let component: C427Component;
  let fixture: ComponentFixture<C427Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C427Component]
    });
    fixture = TestBed.createComponent(C427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
