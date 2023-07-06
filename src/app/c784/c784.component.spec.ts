import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C784Component } from './c784.component';

describe('C784Component', () => {
  let component: C784Component;
  let fixture: ComponentFixture<C784Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C784Component]
    });
    fixture = TestBed.createComponent(C784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
