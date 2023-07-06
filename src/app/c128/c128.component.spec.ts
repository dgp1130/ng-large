import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C128Component } from './c128.component';

describe('C128Component', () => {
  let component: C128Component;
  let fixture: ComponentFixture<C128Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C128Component]
    });
    fixture = TestBed.createComponent(C128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
