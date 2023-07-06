import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C362Component } from './c362.component';

describe('C362Component', () => {
  let component: C362Component;
  let fixture: ComponentFixture<C362Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C362Component]
    });
    fixture = TestBed.createComponent(C362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
