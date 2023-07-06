import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C718Component } from './c718.component';

describe('C718Component', () => {
  let component: C718Component;
  let fixture: ComponentFixture<C718Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C718Component]
    });
    fixture = TestBed.createComponent(C718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
