import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C926Component } from './c926.component';

describe('C926Component', () => {
  let component: C926Component;
  let fixture: ComponentFixture<C926Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C926Component]
    });
    fixture = TestBed.createComponent(C926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
