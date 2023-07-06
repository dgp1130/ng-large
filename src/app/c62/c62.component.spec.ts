import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C62Component } from './c62.component';

describe('C62Component', () => {
  let component: C62Component;
  let fixture: ComponentFixture<C62Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C62Component]
    });
    fixture = TestBed.createComponent(C62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
