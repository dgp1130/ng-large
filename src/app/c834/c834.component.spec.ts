import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C834Component } from './c834.component';

describe('C834Component', () => {
  let component: C834Component;
  let fixture: ComponentFixture<C834Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C834Component]
    });
    fixture = TestBed.createComponent(C834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
