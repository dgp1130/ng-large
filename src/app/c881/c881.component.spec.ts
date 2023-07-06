import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C881Component } from './c881.component';

describe('C881Component', () => {
  let component: C881Component;
  let fixture: ComponentFixture<C881Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C881Component]
    });
    fixture = TestBed.createComponent(C881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
