import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C420Component } from './c420.component';

describe('C420Component', () => {
  let component: C420Component;
  let fixture: ComponentFixture<C420Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C420Component]
    });
    fixture = TestBed.createComponent(C420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
