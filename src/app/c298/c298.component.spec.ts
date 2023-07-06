import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C298Component } from './c298.component';

describe('C298Component', () => {
  let component: C298Component;
  let fixture: ComponentFixture<C298Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C298Component]
    });
    fixture = TestBed.createComponent(C298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
