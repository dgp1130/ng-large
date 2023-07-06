import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C573Component } from './c573.component';

describe('C573Component', () => {
  let component: C573Component;
  let fixture: ComponentFixture<C573Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C573Component]
    });
    fixture = TestBed.createComponent(C573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
