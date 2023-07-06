import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C171Component } from './c171.component';

describe('C171Component', () => {
  let component: C171Component;
  let fixture: ComponentFixture<C171Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C171Component]
    });
    fixture = TestBed.createComponent(C171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
