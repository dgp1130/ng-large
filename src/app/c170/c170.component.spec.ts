import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C170Component } from './c170.component';

describe('C170Component', () => {
  let component: C170Component;
  let fixture: ComponentFixture<C170Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C170Component]
    });
    fixture = TestBed.createComponent(C170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
