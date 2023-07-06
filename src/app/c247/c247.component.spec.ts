import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C247Component } from './c247.component';

describe('C247Component', () => {
  let component: C247Component;
  let fixture: ComponentFixture<C247Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C247Component]
    });
    fixture = TestBed.createComponent(C247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
