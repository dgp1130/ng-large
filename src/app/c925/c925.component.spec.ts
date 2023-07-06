import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C925Component } from './c925.component';

describe('C925Component', () => {
  let component: C925Component;
  let fixture: ComponentFixture<C925Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C925Component]
    });
    fixture = TestBed.createComponent(C925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
