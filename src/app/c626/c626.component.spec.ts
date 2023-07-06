import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C626Component } from './c626.component';

describe('C626Component', () => {
  let component: C626Component;
  let fixture: ComponentFixture<C626Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C626Component]
    });
    fixture = TestBed.createComponent(C626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
