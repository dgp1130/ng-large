import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C283Component } from './c283.component';

describe('C283Component', () => {
  let component: C283Component;
  let fixture: ComponentFixture<C283Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C283Component]
    });
    fixture = TestBed.createComponent(C283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
