import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C915Component } from './c915.component';

describe('C915Component', () => {
  let component: C915Component;
  let fixture: ComponentFixture<C915Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C915Component]
    });
    fixture = TestBed.createComponent(C915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
