import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C94Component } from './c94.component';

describe('C94Component', () => {
  let component: C94Component;
  let fixture: ComponentFixture<C94Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C94Component]
    });
    fixture = TestBed.createComponent(C94Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
