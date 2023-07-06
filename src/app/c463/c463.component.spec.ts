import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C463Component } from './c463.component';

describe('C463Component', () => {
  let component: C463Component;
  let fixture: ComponentFixture<C463Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C463Component]
    });
    fixture = TestBed.createComponent(C463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
