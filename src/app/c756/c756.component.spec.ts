import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C756Component } from './c756.component';

describe('C756Component', () => {
  let component: C756Component;
  let fixture: ComponentFixture<C756Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C756Component]
    });
    fixture = TestBed.createComponent(C756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
