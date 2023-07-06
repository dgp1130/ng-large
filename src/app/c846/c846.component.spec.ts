import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C846Component } from './c846.component';

describe('C846Component', () => {
  let component: C846Component;
  let fixture: ComponentFixture<C846Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C846Component]
    });
    fixture = TestBed.createComponent(C846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
