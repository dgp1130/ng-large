import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C933Component } from './c933.component';

describe('C933Component', () => {
  let component: C933Component;
  let fixture: ComponentFixture<C933Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C933Component]
    });
    fixture = TestBed.createComponent(C933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
