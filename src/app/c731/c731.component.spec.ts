import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C731Component } from './c731.component';

describe('C731Component', () => {
  let component: C731Component;
  let fixture: ComponentFixture<C731Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C731Component]
    });
    fixture = TestBed.createComponent(C731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
