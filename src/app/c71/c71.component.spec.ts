import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C71Component } from './c71.component';

describe('C71Component', () => {
  let component: C71Component;
  let fixture: ComponentFixture<C71Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C71Component]
    });
    fixture = TestBed.createComponent(C71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
