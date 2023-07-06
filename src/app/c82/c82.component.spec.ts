import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C82Component } from './c82.component';

describe('C82Component', () => {
  let component: C82Component;
  let fixture: ComponentFixture<C82Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C82Component]
    });
    fixture = TestBed.createComponent(C82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
