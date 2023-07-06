import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C126Component } from './c126.component';

describe('C126Component', () => {
  let component: C126Component;
  let fixture: ComponentFixture<C126Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C126Component]
    });
    fixture = TestBed.createComponent(C126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
