import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C466Component } from './c466.component';

describe('C466Component', () => {
  let component: C466Component;
  let fixture: ComponentFixture<C466Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C466Component]
    });
    fixture = TestBed.createComponent(C466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
