import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C449Component } from './c449.component';

describe('C449Component', () => {
  let component: C449Component;
  let fixture: ComponentFixture<C449Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C449Component]
    });
    fixture = TestBed.createComponent(C449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
