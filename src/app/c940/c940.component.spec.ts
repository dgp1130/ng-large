import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C940Component } from './c940.component';

describe('C940Component', () => {
  let component: C940Component;
  let fixture: ComponentFixture<C940Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C940Component]
    });
    fixture = TestBed.createComponent(C940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
