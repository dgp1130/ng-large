import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C929Component } from './c929.component';

describe('C929Component', () => {
  let component: C929Component;
  let fixture: ComponentFixture<C929Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C929Component]
    });
    fixture = TestBed.createComponent(C929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
