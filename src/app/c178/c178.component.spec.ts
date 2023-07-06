import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C178Component } from './c178.component';

describe('C178Component', () => {
  let component: C178Component;
  let fixture: ComponentFixture<C178Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C178Component]
    });
    fixture = TestBed.createComponent(C178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
