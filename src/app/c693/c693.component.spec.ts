import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C693Component } from './c693.component';

describe('C693Component', () => {
  let component: C693Component;
  let fixture: ComponentFixture<C693Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C693Component]
    });
    fixture = TestBed.createComponent(C693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
