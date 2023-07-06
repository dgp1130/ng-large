import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C637Component } from './c637.component';

describe('C637Component', () => {
  let component: C637Component;
  let fixture: ComponentFixture<C637Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C637Component]
    });
    fixture = TestBed.createComponent(C637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
