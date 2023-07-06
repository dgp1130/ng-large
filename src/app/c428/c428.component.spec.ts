import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C428Component } from './c428.component';

describe('C428Component', () => {
  let component: C428Component;
  let fixture: ComponentFixture<C428Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C428Component]
    });
    fixture = TestBed.createComponent(C428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
