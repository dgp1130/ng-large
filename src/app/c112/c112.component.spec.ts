import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C112Component } from './c112.component';

describe('C112Component', () => {
  let component: C112Component;
  let fixture: ComponentFixture<C112Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C112Component]
    });
    fixture = TestBed.createComponent(C112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
