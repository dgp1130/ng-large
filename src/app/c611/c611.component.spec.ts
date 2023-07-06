import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C611Component } from './c611.component';

describe('C611Component', () => {
  let component: C611Component;
  let fixture: ComponentFixture<C611Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C611Component]
    });
    fixture = TestBed.createComponent(C611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
