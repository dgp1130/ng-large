import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C893Component } from './c893.component';

describe('C893Component', () => {
  let component: C893Component;
  let fixture: ComponentFixture<C893Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C893Component]
    });
    fixture = TestBed.createComponent(C893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
