import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C853Component } from './c853.component';

describe('C853Component', () => {
  let component: C853Component;
  let fixture: ComponentFixture<C853Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C853Component]
    });
    fixture = TestBed.createComponent(C853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
