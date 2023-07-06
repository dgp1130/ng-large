import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C924Component } from './c924.component';

describe('C924Component', () => {
  let component: C924Component;
  let fixture: ComponentFixture<C924Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C924Component]
    });
    fixture = TestBed.createComponent(C924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
