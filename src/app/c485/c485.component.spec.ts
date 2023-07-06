import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C485Component } from './c485.component';

describe('C485Component', () => {
  let component: C485Component;
  let fixture: ComponentFixture<C485Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C485Component]
    });
    fixture = TestBed.createComponent(C485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
