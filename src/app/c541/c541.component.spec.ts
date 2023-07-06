import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C541Component } from './c541.component';

describe('C541Component', () => {
  let component: C541Component;
  let fixture: ComponentFixture<C541Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C541Component]
    });
    fixture = TestBed.createComponent(C541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
