import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C847Component } from './c847.component';

describe('C847Component', () => {
  let component: C847Component;
  let fixture: ComponentFixture<C847Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C847Component]
    });
    fixture = TestBed.createComponent(C847Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
