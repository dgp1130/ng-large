import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C501Component } from './c501.component';

describe('C501Component', () => {
  let component: C501Component;
  let fixture: ComponentFixture<C501Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C501Component]
    });
    fixture = TestBed.createComponent(C501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
