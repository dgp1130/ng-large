import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C733Component } from './c733.component';

describe('C733Component', () => {
  let component: C733Component;
  let fixture: ComponentFixture<C733Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C733Component]
    });
    fixture = TestBed.createComponent(C733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
