import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C338Component } from './c338.component';

describe('C338Component', () => {
  let component: C338Component;
  let fixture: ComponentFixture<C338Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C338Component]
    });
    fixture = TestBed.createComponent(C338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
