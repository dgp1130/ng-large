import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C328Component } from './c328.component';

describe('C328Component', () => {
  let component: C328Component;
  let fixture: ComponentFixture<C328Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C328Component]
    });
    fixture = TestBed.createComponent(C328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
