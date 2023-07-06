import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C958Component } from './c958.component';

describe('C958Component', () => {
  let component: C958Component;
  let fixture: ComponentFixture<C958Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C958Component]
    });
    fixture = TestBed.createComponent(C958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
