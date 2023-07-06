import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C988Component } from './c988.component';

describe('C988Component', () => {
  let component: C988Component;
  let fixture: ComponentFixture<C988Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C988Component]
    });
    fixture = TestBed.createComponent(C988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
