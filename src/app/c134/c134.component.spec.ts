import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C134Component } from './c134.component';

describe('C134Component', () => {
  let component: C134Component;
  let fixture: ComponentFixture<C134Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C134Component]
    });
    fixture = TestBed.createComponent(C134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
