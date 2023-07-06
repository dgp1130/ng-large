import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C290Component } from './c290.component';

describe('C290Component', () => {
  let component: C290Component;
  let fixture: ComponentFixture<C290Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C290Component]
    });
    fixture = TestBed.createComponent(C290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
