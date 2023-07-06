import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C866Component } from './c866.component';

describe('C866Component', () => {
  let component: C866Component;
  let fixture: ComponentFixture<C866Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C866Component]
    });
    fixture = TestBed.createComponent(C866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
