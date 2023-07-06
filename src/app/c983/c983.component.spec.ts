import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C983Component } from './c983.component';

describe('C983Component', () => {
  let component: C983Component;
  let fixture: ComponentFixture<C983Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C983Component]
    });
    fixture = TestBed.createComponent(C983Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
