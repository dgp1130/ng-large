import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C312Component } from './c312.component';

describe('C312Component', () => {
  let component: C312Component;
  let fixture: ComponentFixture<C312Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C312Component]
    });
    fixture = TestBed.createComponent(C312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
