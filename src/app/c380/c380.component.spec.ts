import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C380Component } from './c380.component';

describe('C380Component', () => {
  let component: C380Component;
  let fixture: ComponentFixture<C380Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C380Component]
    });
    fixture = TestBed.createComponent(C380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
