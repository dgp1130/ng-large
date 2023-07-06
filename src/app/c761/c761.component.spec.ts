import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C761Component } from './c761.component';

describe('C761Component', () => {
  let component: C761Component;
  let fixture: ComponentFixture<C761Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C761Component]
    });
    fixture = TestBed.createComponent(C761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
