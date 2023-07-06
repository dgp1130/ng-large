import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C827Component } from './c827.component';

describe('C827Component', () => {
  let component: C827Component;
  let fixture: ComponentFixture<C827Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C827Component]
    });
    fixture = TestBed.createComponent(C827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
