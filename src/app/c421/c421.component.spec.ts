import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C421Component } from './c421.component';

describe('C421Component', () => {
  let component: C421Component;
  let fixture: ComponentFixture<C421Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C421Component]
    });
    fixture = TestBed.createComponent(C421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
