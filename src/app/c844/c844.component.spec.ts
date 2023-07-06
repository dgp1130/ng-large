import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C844Component } from './c844.component';

describe('C844Component', () => {
  let component: C844Component;
  let fixture: ComponentFixture<C844Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C844Component]
    });
    fixture = TestBed.createComponent(C844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
