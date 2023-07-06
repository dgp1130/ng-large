import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C951Component } from './c951.component';

describe('C951Component', () => {
  let component: C951Component;
  let fixture: ComponentFixture<C951Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C951Component]
    });
    fixture = TestBed.createComponent(C951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
