import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C467Component } from './c467.component';

describe('C467Component', () => {
  let component: C467Component;
  let fixture: ComponentFixture<C467Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C467Component]
    });
    fixture = TestBed.createComponent(C467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
