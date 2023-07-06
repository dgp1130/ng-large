import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C902Component } from './c902.component';

describe('C902Component', () => {
  let component: C902Component;
  let fixture: ComponentFixture<C902Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C902Component]
    });
    fixture = TestBed.createComponent(C902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
