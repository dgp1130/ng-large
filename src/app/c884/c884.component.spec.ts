import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C884Component } from './c884.component';

describe('C884Component', () => {
  let component: C884Component;
  let fixture: ComponentFixture<C884Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C884Component]
    });
    fixture = TestBed.createComponent(C884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
