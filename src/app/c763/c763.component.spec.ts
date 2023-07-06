import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C763Component } from './c763.component';

describe('C763Component', () => {
  let component: C763Component;
  let fixture: ComponentFixture<C763Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C763Component]
    });
    fixture = TestBed.createComponent(C763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
