import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C315Component } from './c315.component';

describe('C315Component', () => {
  let component: C315Component;
  let fixture: ComponentFixture<C315Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C315Component]
    });
    fixture = TestBed.createComponent(C315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
