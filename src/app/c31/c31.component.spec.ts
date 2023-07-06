import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C31Component } from './c31.component';

describe('C31Component', () => {
  let component: C31Component;
  let fixture: ComponentFixture<C31Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C31Component]
    });
    fixture = TestBed.createComponent(C31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
