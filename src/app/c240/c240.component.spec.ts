import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C240Component } from './c240.component';

describe('C240Component', () => {
  let component: C240Component;
  let fixture: ComponentFixture<C240Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C240Component]
    });
    fixture = TestBed.createComponent(C240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
