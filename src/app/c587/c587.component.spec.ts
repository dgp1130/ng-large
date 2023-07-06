import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C587Component } from './c587.component';

describe('C587Component', () => {
  let component: C587Component;
  let fixture: ComponentFixture<C587Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C587Component]
    });
    fixture = TestBed.createComponent(C587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
