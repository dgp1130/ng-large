import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C537Component } from './c537.component';

describe('C537Component', () => {
  let component: C537Component;
  let fixture: ComponentFixture<C537Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C537Component]
    });
    fixture = TestBed.createComponent(C537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
