import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C777Component } from './c777.component';

describe('C777Component', () => {
  let component: C777Component;
  let fixture: ComponentFixture<C777Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C777Component]
    });
    fixture = TestBed.createComponent(C777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
