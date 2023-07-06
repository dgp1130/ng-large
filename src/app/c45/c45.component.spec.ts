import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C45Component } from './c45.component';

describe('C45Component', () => {
  let component: C45Component;
  let fixture: ComponentFixture<C45Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C45Component]
    });
    fixture = TestBed.createComponent(C45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
