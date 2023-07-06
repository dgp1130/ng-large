import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C39Component } from './c39.component';

describe('C39Component', () => {
  let component: C39Component;
  let fixture: ComponentFixture<C39Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C39Component]
    });
    fixture = TestBed.createComponent(C39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
