import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C927Component } from './c927.component';

describe('C927Component', () => {
  let component: C927Component;
  let fixture: ComponentFixture<C927Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C927Component]
    });
    fixture = TestBed.createComponent(C927Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
