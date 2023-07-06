import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C932Component } from './c932.component';

describe('C932Component', () => {
  let component: C932Component;
  let fixture: ComponentFixture<C932Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C932Component]
    });
    fixture = TestBed.createComponent(C932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
