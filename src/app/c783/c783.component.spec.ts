import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C783Component } from './c783.component';

describe('C783Component', () => {
  let component: C783Component;
  let fixture: ComponentFixture<C783Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C783Component]
    });
    fixture = TestBed.createComponent(C783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
