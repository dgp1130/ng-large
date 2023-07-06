import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C269Component } from './c269.component';

describe('C269Component', () => {
  let component: C269Component;
  let fixture: ComponentFixture<C269Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C269Component]
    });
    fixture = TestBed.createComponent(C269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
