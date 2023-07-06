import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C219Component } from './c219.component';

describe('C219Component', () => {
  let component: C219Component;
  let fixture: ComponentFixture<C219Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C219Component]
    });
    fixture = TestBed.createComponent(C219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
