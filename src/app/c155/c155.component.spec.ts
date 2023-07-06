import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C155Component } from './c155.component';

describe('C155Component', () => {
  let component: C155Component;
  let fixture: ComponentFixture<C155Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C155Component]
    });
    fixture = TestBed.createComponent(C155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
