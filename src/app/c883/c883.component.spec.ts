import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C883Component } from './c883.component';

describe('C883Component', () => {
  let component: C883Component;
  let fixture: ComponentFixture<C883Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C883Component]
    });
    fixture = TestBed.createComponent(C883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
