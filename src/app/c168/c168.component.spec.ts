import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C168Component } from './c168.component';

describe('C168Component', () => {
  let component: C168Component;
  let fixture: ComponentFixture<C168Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C168Component]
    });
    fixture = TestBed.createComponent(C168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
