import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C659Component } from './c659.component';

describe('C659Component', () => {
  let component: C659Component;
  let fixture: ComponentFixture<C659Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C659Component]
    });
    fixture = TestBed.createComponent(C659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
