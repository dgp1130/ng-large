import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C223Component } from './c223.component';

describe('C223Component', () => {
  let component: C223Component;
  let fixture: ComponentFixture<C223Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C223Component]
    });
    fixture = TestBed.createComponent(C223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
