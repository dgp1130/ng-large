import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C822Component } from './c822.component';

describe('C822Component', () => {
  let component: C822Component;
  let fixture: ComponentFixture<C822Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C822Component]
    });
    fixture = TestBed.createComponent(C822Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
