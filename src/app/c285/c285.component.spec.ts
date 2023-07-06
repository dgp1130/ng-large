import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C285Component } from './c285.component';

describe('C285Component', () => {
  let component: C285Component;
  let fixture: ComponentFixture<C285Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C285Component]
    });
    fixture = TestBed.createComponent(C285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
