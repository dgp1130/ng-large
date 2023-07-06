import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C296Component } from './c296.component';

describe('C296Component', () => {
  let component: C296Component;
  let fixture: ComponentFixture<C296Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C296Component]
    });
    fixture = TestBed.createComponent(C296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
