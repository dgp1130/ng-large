import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C905Component } from './c905.component';

describe('C905Component', () => {
  let component: C905Component;
  let fixture: ComponentFixture<C905Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C905Component]
    });
    fixture = TestBed.createComponent(C905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
