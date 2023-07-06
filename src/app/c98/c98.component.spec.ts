import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C98Component } from './c98.component';

describe('C98Component', () => {
  let component: C98Component;
  let fixture: ComponentFixture<C98Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C98Component]
    });
    fixture = TestBed.createComponent(C98Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
