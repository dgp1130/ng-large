import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C93Component } from './c93.component';

describe('C93Component', () => {
  let component: C93Component;
  let fixture: ComponentFixture<C93Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C93Component]
    });
    fixture = TestBed.createComponent(C93Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
