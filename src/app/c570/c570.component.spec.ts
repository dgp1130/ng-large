import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C570Component } from './c570.component';

describe('C570Component', () => {
  let component: C570Component;
  let fixture: ComponentFixture<C570Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C570Component]
    });
    fixture = TestBed.createComponent(C570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
