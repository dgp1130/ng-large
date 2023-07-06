import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C217Component } from './c217.component';

describe('C217Component', () => {
  let component: C217Component;
  let fixture: ComponentFixture<C217Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C217Component]
    });
    fixture = TestBed.createComponent(C217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
