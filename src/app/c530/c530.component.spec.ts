import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C530Component } from './c530.component';

describe('C530Component', () => {
  let component: C530Component;
  let fixture: ComponentFixture<C530Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C530Component]
    });
    fixture = TestBed.createComponent(C530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
