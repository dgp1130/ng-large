import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C15Component } from './c15.component';

describe('C15Component', () => {
  let component: C15Component;
  let fixture: ComponentFixture<C15Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C15Component]
    });
    fixture = TestBed.createComponent(C15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
