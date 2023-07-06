import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C561Component } from './c561.component';

describe('C561Component', () => {
  let component: C561Component;
  let fixture: ComponentFixture<C561Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C561Component]
    });
    fixture = TestBed.createComponent(C561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
