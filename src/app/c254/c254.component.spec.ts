import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C254Component } from './c254.component';

describe('C254Component', () => {
  let component: C254Component;
  let fixture: ComponentFixture<C254Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C254Component]
    });
    fixture = TestBed.createComponent(C254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
