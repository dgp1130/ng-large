import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C778Component } from './c778.component';

describe('C778Component', () => {
  let component: C778Component;
  let fixture: ComponentFixture<C778Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C778Component]
    });
    fixture = TestBed.createComponent(C778Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
