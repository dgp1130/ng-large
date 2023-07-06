import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C882Component } from './c882.component';

describe('C882Component', () => {
  let component: C882Component;
  let fixture: ComponentFixture<C882Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C882Component]
    });
    fixture = TestBed.createComponent(C882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
