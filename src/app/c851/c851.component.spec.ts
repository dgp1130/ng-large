import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C851Component } from './c851.component';

describe('C851Component', () => {
  let component: C851Component;
  let fixture: ComponentFixture<C851Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C851Component]
    });
    fixture = TestBed.createComponent(C851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
