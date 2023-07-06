import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C131Component } from './c131.component';

describe('C131Component', () => {
  let component: C131Component;
  let fixture: ComponentFixture<C131Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C131Component]
    });
    fixture = TestBed.createComponent(C131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
