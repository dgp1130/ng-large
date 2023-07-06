import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C458Component } from './c458.component';

describe('C458Component', () => {
  let component: C458Component;
  let fixture: ComponentFixture<C458Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C458Component]
    });
    fixture = TestBed.createComponent(C458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
