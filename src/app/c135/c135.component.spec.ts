import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C135Component } from './c135.component';

describe('C135Component', () => {
  let component: C135Component;
  let fixture: ComponentFixture<C135Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C135Component]
    });
    fixture = TestBed.createComponent(C135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
