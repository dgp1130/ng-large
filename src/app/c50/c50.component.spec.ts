import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C50Component } from './c50.component';

describe('C50Component', () => {
  let component: C50Component;
  let fixture: ComponentFixture<C50Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C50Component]
    });
    fixture = TestBed.createComponent(C50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
