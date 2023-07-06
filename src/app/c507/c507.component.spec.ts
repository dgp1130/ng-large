import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C507Component } from './c507.component';

describe('C507Component', () => {
  let component: C507Component;
  let fixture: ComponentFixture<C507Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C507Component]
    });
    fixture = TestBed.createComponent(C507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
