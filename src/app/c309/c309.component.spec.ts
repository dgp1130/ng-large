import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C309Component } from './c309.component';

describe('C309Component', () => {
  let component: C309Component;
  let fixture: ComponentFixture<C309Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C309Component]
    });
    fixture = TestBed.createComponent(C309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
