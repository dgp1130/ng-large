import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C944Component } from './c944.component';

describe('C944Component', () => {
  let component: C944Component;
  let fixture: ComponentFixture<C944Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C944Component]
    });
    fixture = TestBed.createComponent(C944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
