import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C762Component } from './c762.component';

describe('C762Component', () => {
  let component: C762Component;
  let fixture: ComponentFixture<C762Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C762Component]
    });
    fixture = TestBed.createComponent(C762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
