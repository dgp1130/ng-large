import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C177Component } from './c177.component';

describe('C177Component', () => {
  let component: C177Component;
  let fixture: ComponentFixture<C177Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C177Component]
    });
    fixture = TestBed.createComponent(C177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
