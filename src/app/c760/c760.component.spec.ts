import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C760Component } from './c760.component';

describe('C760Component', () => {
  let component: C760Component;
  let fixture: ComponentFixture<C760Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C760Component]
    });
    fixture = TestBed.createComponent(C760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
