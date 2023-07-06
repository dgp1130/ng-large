import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C163Component } from './c163.component';

describe('C163Component', () => {
  let component: C163Component;
  let fixture: ComponentFixture<C163Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C163Component]
    });
    fixture = TestBed.createComponent(C163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
