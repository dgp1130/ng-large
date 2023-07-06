import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C100Component } from './c100.component';

describe('C100Component', () => {
  let component: C100Component;
  let fixture: ComponentFixture<C100Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C100Component]
    });
    fixture = TestBed.createComponent(C100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
