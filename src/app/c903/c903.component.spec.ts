import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C903Component } from './c903.component';

describe('C903Component', () => {
  let component: C903Component;
  let fixture: ComponentFixture<C903Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C903Component]
    });
    fixture = TestBed.createComponent(C903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
