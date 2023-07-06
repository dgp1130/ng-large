import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C770Component } from './c770.component';

describe('C770Component', () => {
  let component: C770Component;
  let fixture: ComponentFixture<C770Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C770Component]
    });
    fixture = TestBed.createComponent(C770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
