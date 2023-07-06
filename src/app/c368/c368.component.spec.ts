import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C368Component } from './c368.component';

describe('C368Component', () => {
  let component: C368Component;
  let fixture: ComponentFixture<C368Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C368Component]
    });
    fixture = TestBed.createComponent(C368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
