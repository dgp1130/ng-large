import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C58Component } from './c58.component';

describe('C58Component', () => {
  let component: C58Component;
  let fixture: ComponentFixture<C58Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C58Component]
    });
    fixture = TestBed.createComponent(C58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
