import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C268Component } from './c268.component';

describe('C268Component', () => {
  let component: C268Component;
  let fixture: ComponentFixture<C268Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C268Component]
    });
    fixture = TestBed.createComponent(C268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
