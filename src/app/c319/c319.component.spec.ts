import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C319Component } from './c319.component';

describe('C319Component', () => {
  let component: C319Component;
  let fixture: ComponentFixture<C319Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C319Component]
    });
    fixture = TestBed.createComponent(C319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
