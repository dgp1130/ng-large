import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C715Component } from './c715.component';

describe('C715Component', () => {
  let component: C715Component;
  let fixture: ComponentFixture<C715Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C715Component]
    });
    fixture = TestBed.createComponent(C715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
