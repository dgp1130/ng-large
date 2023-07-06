import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C73Component } from './c73.component';

describe('C73Component', () => {
  let component: C73Component;
  let fixture: ComponentFixture<C73Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C73Component]
    });
    fixture = TestBed.createComponent(C73Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
