import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C270Component } from './c270.component';

describe('C270Component', () => {
  let component: C270Component;
  let fixture: ComponentFixture<C270Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C270Component]
    });
    fixture = TestBed.createComponent(C270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
