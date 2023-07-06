import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C975Component } from './c975.component';

describe('C975Component', () => {
  let component: C975Component;
  let fixture: ComponentFixture<C975Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C975Component]
    });
    fixture = TestBed.createComponent(C975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
