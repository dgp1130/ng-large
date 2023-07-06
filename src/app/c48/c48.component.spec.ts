import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C48Component } from './c48.component';

describe('C48Component', () => {
  let component: C48Component;
  let fixture: ComponentFixture<C48Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C48Component]
    });
    fixture = TestBed.createComponent(C48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
