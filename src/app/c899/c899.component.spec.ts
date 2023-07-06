import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C899Component } from './c899.component';

describe('C899Component', () => {
  let component: C899Component;
  let fixture: ComponentFixture<C899Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C899Component]
    });
    fixture = TestBed.createComponent(C899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
