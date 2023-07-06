import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C356Component } from './c356.component';

describe('C356Component', () => {
  let component: C356Component;
  let fixture: ComponentFixture<C356Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C356Component]
    });
    fixture = TestBed.createComponent(C356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
