import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C930Component } from './c930.component';

describe('C930Component', () => {
  let component: C930Component;
  let fixture: ComponentFixture<C930Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C930Component]
    });
    fixture = TestBed.createComponent(C930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
