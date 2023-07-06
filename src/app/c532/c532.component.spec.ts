import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C532Component } from './c532.component';

describe('C532Component', () => {
  let component: C532Component;
  let fixture: ComponentFixture<C532Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C532Component]
    });
    fixture = TestBed.createComponent(C532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
