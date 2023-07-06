import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C764Component } from './c764.component';

describe('C764Component', () => {
  let component: C764Component;
  let fixture: ComponentFixture<C764Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C764Component]
    });
    fixture = TestBed.createComponent(C764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
