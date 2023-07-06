import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C496Component } from './c496.component';

describe('C496Component', () => {
  let component: C496Component;
  let fixture: ComponentFixture<C496Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C496Component]
    });
    fixture = TestBed.createComponent(C496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
