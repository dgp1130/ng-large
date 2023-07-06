import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C224Component } from './c224.component';

describe('C224Component', () => {
  let component: C224Component;
  let fixture: ComponentFixture<C224Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C224Component]
    });
    fixture = TestBed.createComponent(C224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
