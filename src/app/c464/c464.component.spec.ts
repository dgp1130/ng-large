import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C464Component } from './c464.component';

describe('C464Component', () => {
  let component: C464Component;
  let fixture: ComponentFixture<C464Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C464Component]
    });
    fixture = TestBed.createComponent(C464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
