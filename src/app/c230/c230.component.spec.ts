import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C230Component } from './c230.component';

describe('C230Component', () => {
  let component: C230Component;
  let fixture: ComponentFixture<C230Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C230Component]
    });
    fixture = TestBed.createComponent(C230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
