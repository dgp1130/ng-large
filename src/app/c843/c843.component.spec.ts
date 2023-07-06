import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C843Component } from './c843.component';

describe('C843Component', () => {
  let component: C843Component;
  let fixture: ComponentFixture<C843Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C843Component]
    });
    fixture = TestBed.createComponent(C843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
