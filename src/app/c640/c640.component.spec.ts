import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C640Component } from './c640.component';

describe('C640Component', () => {
  let component: C640Component;
  let fixture: ComponentFixture<C640Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C640Component]
    });
    fixture = TestBed.createComponent(C640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
