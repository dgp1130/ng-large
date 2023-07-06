import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C51Component } from './c51.component';

describe('C51Component', () => {
  let component: C51Component;
  let fixture: ComponentFixture<C51Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C51Component]
    });
    fixture = TestBed.createComponent(C51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
