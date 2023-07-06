import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C968Component } from './c968.component';

describe('C968Component', () => {
  let component: C968Component;
  let fixture: ComponentFixture<C968Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C968Component]
    });
    fixture = TestBed.createComponent(C968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
