import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C675Component } from './c675.component';

describe('C675Component', () => {
  let component: C675Component;
  let fixture: ComponentFixture<C675Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C675Component]
    });
    fixture = TestBed.createComponent(C675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
