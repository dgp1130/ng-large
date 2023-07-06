import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C322Component } from './c322.component';

describe('C322Component', () => {
  let component: C322Component;
  let fixture: ComponentFixture<C322Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C322Component]
    });
    fixture = TestBed.createComponent(C322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
