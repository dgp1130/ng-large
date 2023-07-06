import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C307Component } from './c307.component';

describe('C307Component', () => {
  let component: C307Component;
  let fixture: ComponentFixture<C307Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C307Component]
    });
    fixture = TestBed.createComponent(C307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
