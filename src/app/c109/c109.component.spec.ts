import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C109Component } from './c109.component';

describe('C109Component', () => {
  let component: C109Component;
  let fixture: ComponentFixture<C109Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C109Component]
    });
    fixture = TestBed.createComponent(C109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
