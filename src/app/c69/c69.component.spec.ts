import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C69Component } from './c69.component';

describe('C69Component', () => {
  let component: C69Component;
  let fixture: ComponentFixture<C69Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C69Component]
    });
    fixture = TestBed.createComponent(C69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
