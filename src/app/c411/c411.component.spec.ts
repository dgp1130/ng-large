import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C411Component } from './c411.component';

describe('C411Component', () => {
  let component: C411Component;
  let fixture: ComponentFixture<C411Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C411Component]
    });
    fixture = TestBed.createComponent(C411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
