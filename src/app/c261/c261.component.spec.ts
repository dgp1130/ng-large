import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C261Component } from './c261.component';

describe('C261Component', () => {
  let component: C261Component;
  let fixture: ComponentFixture<C261Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C261Component]
    });
    fixture = TestBed.createComponent(C261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
