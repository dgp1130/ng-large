import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C474Component } from './c474.component';

describe('C474Component', () => {
  let component: C474Component;
  let fixture: ComponentFixture<C474Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C474Component]
    });
    fixture = TestBed.createComponent(C474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
