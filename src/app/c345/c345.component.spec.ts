import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C345Component } from './c345.component';

describe('C345Component', () => {
  let component: C345Component;
  let fixture: ComponentFixture<C345Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C345Component]
    });
    fixture = TestBed.createComponent(C345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
