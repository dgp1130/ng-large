import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C550Component } from './c550.component';

describe('C550Component', () => {
  let component: C550Component;
  let fixture: ComponentFixture<C550Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C550Component]
    });
    fixture = TestBed.createComponent(C550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
