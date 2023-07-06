import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C895Component } from './c895.component';

describe('C895Component', () => {
  let component: C895Component;
  let fixture: ComponentFixture<C895Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C895Component]
    });
    fixture = TestBed.createComponent(C895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
