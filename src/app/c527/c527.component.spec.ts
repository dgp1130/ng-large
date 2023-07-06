import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C527Component } from './c527.component';

describe('C527Component', () => {
  let component: C527Component;
  let fixture: ComponentFixture<C527Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C527Component]
    });
    fixture = TestBed.createComponent(C527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
