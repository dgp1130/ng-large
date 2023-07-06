import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C196Component } from './c196.component';

describe('C196Component', () => {
  let component: C196Component;
  let fixture: ComponentFixture<C196Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C196Component]
    });
    fixture = TestBed.createComponent(C196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
