import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C37Component } from './c37.component';

describe('C37Component', () => {
  let component: C37Component;
  let fixture: ComponentFixture<C37Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C37Component]
    });
    fixture = TestBed.createComponent(C37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
