import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C680Component } from './c680.component';

describe('C680Component', () => {
  let component: C680Component;
  let fixture: ComponentFixture<C680Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C680Component]
    });
    fixture = TestBed.createComponent(C680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
