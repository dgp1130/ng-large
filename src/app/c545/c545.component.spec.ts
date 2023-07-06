import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C545Component } from './c545.component';

describe('C545Component', () => {
  let component: C545Component;
  let fixture: ComponentFixture<C545Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C545Component]
    });
    fixture = TestBed.createComponent(C545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
