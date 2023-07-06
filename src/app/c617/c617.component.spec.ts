import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C617Component } from './c617.component';

describe('C617Component', () => {
  let component: C617Component;
  let fixture: ComponentFixture<C617Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C617Component]
    });
    fixture = TestBed.createComponent(C617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
