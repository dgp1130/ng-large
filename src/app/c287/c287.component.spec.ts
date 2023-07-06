import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C287Component } from './c287.component';

describe('C287Component', () => {
  let component: C287Component;
  let fixture: ComponentFixture<C287Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C287Component]
    });
    fixture = TestBed.createComponent(C287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
