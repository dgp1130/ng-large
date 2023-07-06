import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C499Component } from './c499.component';

describe('C499Component', () => {
  let component: C499Component;
  let fixture: ComponentFixture<C499Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C499Component]
    });
    fixture = TestBed.createComponent(C499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
