import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C59Component } from './c59.component';

describe('C59Component', () => {
  let component: C59Component;
  let fixture: ComponentFixture<C59Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C59Component]
    });
    fixture = TestBed.createComponent(C59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
