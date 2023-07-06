import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C165Component } from './c165.component';

describe('C165Component', () => {
  let component: C165Component;
  let fixture: ComponentFixture<C165Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C165Component]
    });
    fixture = TestBed.createComponent(C165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
