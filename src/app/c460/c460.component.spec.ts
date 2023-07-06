import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C460Component } from './c460.component';

describe('C460Component', () => {
  let component: C460Component;
  let fixture: ComponentFixture<C460Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C460Component]
    });
    fixture = TestBed.createComponent(C460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
