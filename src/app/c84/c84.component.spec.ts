import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C84Component } from './c84.component';

describe('C84Component', () => {
  let component: C84Component;
  let fixture: ComponentFixture<C84Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C84Component]
    });
    fixture = TestBed.createComponent(C84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
