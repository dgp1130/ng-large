import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C294Component } from './c294.component';

describe('C294Component', () => {
  let component: C294Component;
  let fixture: ComponentFixture<C294Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C294Component]
    });
    fixture = TestBed.createComponent(C294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
