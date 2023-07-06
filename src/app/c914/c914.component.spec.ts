import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C914Component } from './c914.component';

describe('C914Component', () => {
  let component: C914Component;
  let fixture: ComponentFixture<C914Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C914Component]
    });
    fixture = TestBed.createComponent(C914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
