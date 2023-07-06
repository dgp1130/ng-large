import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C518Component } from './c518.component';

describe('C518Component', () => {
  let component: C518Component;
  let fixture: ComponentFixture<C518Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C518Component]
    });
    fixture = TestBed.createComponent(C518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
