import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C647Component } from './c647.component';

describe('C647Component', () => {
  let component: C647Component;
  let fixture: ComponentFixture<C647Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C647Component]
    });
    fixture = TestBed.createComponent(C647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
