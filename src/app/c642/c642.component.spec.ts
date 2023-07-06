import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C642Component } from './c642.component';

describe('C642Component', () => {
  let component: C642Component;
  let fixture: ComponentFixture<C642Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C642Component]
    });
    fixture = TestBed.createComponent(C642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
