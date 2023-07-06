import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C786Component } from './c786.component';

describe('C786Component', () => {
  let component: C786Component;
  let fixture: ComponentFixture<C786Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C786Component]
    });
    fixture = TestBed.createComponent(C786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
