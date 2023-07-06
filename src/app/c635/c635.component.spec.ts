import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C635Component } from './c635.component';

describe('C635Component', () => {
  let component: C635Component;
  let fixture: ComponentFixture<C635Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C635Component]
    });
    fixture = TestBed.createComponent(C635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
