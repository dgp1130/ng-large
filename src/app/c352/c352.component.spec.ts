import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C352Component } from './c352.component';

describe('C352Component', () => {
  let component: C352Component;
  let fixture: ComponentFixture<C352Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C352Component]
    });
    fixture = TestBed.createComponent(C352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
