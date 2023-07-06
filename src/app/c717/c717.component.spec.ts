import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C717Component } from './c717.component';

describe('C717Component', () => {
  let component: C717Component;
  let fixture: ComponentFixture<C717Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C717Component]
    });
    fixture = TestBed.createComponent(C717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
