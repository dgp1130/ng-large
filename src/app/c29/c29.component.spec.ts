import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C29Component } from './c29.component';

describe('C29Component', () => {
  let component: C29Component;
  let fixture: ComponentFixture<C29Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C29Component]
    });
    fixture = TestBed.createComponent(C29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
