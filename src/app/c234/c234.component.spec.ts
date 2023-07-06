import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C234Component } from './c234.component';

describe('C234Component', () => {
  let component: C234Component;
  let fixture: ComponentFixture<C234Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C234Component]
    });
    fixture = TestBed.createComponent(C234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
