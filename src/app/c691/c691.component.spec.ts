import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C691Component } from './c691.component';

describe('C691Component', () => {
  let component: C691Component;
  let fixture: ComponentFixture<C691Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C691Component]
    });
    fixture = TestBed.createComponent(C691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
