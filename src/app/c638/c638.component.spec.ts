import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C638Component } from './c638.component';

describe('C638Component', () => {
  let component: C638Component;
  let fixture: ComponentFixture<C638Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C638Component]
    });
    fixture = TestBed.createComponent(C638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
