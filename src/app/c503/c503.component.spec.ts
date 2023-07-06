import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C503Component } from './c503.component';

describe('C503Component', () => {
  let component: C503Component;
  let fixture: ComponentFixture<C503Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C503Component]
    });
    fixture = TestBed.createComponent(C503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
