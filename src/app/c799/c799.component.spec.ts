import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C799Component } from './c799.component';

describe('C799Component', () => {
  let component: C799Component;
  let fixture: ComponentFixture<C799Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C799Component]
    });
    fixture = TestBed.createComponent(C799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
