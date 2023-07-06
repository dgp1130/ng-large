import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C194Component } from './c194.component';

describe('C194Component', () => {
  let component: C194Component;
  let fixture: ComponentFixture<C194Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C194Component]
    });
    fixture = TestBed.createComponent(C194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
