import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C606Component } from './c606.component';

describe('C606Component', () => {
  let component: C606Component;
  let fixture: ComponentFixture<C606Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C606Component]
    });
    fixture = TestBed.createComponent(C606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
