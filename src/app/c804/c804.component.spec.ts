import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C804Component } from './c804.component';

describe('C804Component', () => {
  let component: C804Component;
  let fixture: ComponentFixture<C804Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C804Component]
    });
    fixture = TestBed.createComponent(C804Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
