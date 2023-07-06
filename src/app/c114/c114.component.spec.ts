import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C114Component } from './c114.component';

describe('C114Component', () => {
  let component: C114Component;
  let fixture: ComponentFixture<C114Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C114Component]
    });
    fixture = TestBed.createComponent(C114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
