import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C728Component } from './c728.component';

describe('C728Component', () => {
  let component: C728Component;
  let fixture: ComponentFixture<C728Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C728Component]
    });
    fixture = TestBed.createComponent(C728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
