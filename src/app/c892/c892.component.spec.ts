import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C892Component } from './c892.component';

describe('C892Component', () => {
  let component: C892Component;
  let fixture: ComponentFixture<C892Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C892Component]
    });
    fixture = TestBed.createComponent(C892Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
