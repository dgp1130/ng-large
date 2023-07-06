import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C736Component } from './c736.component';

describe('C736Component', () => {
  let component: C736Component;
  let fixture: ComponentFixture<C736Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C736Component]
    });
    fixture = TestBed.createComponent(C736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
