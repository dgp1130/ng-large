import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C438Component } from './c438.component';

describe('C438Component', () => {
  let component: C438Component;
  let fixture: ComponentFixture<C438Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C438Component]
    });
    fixture = TestBed.createComponent(C438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
