import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C837Component } from './c837.component';

describe('C837Component', () => {
  let component: C837Component;
  let fixture: ComponentFixture<C837Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C837Component]
    });
    fixture = TestBed.createComponent(C837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
