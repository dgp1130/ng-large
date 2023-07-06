import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C954Component } from './c954.component';

describe('C954Component', () => {
  let component: C954Component;
  let fixture: ComponentFixture<C954Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C954Component]
    });
    fixture = TestBed.createComponent(C954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
