import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C533Component } from './c533.component';

describe('C533Component', () => {
  let component: C533Component;
  let fixture: ComponentFixture<C533Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C533Component]
    });
    fixture = TestBed.createComponent(C533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
