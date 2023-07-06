import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C225Component } from './c225.component';

describe('C225Component', () => {
  let component: C225Component;
  let fixture: ComponentFixture<C225Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C225Component]
    });
    fixture = TestBed.createComponent(C225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
