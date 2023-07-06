import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C641Component } from './c641.component';

describe('C641Component', () => {
  let component: C641Component;
  let fixture: ComponentFixture<C641Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C641Component]
    });
    fixture = TestBed.createComponent(C641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
