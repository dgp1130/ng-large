import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12Component } from './c12.component';

describe('C12Component', () => {
  let component: C12Component;
  let fixture: ComponentFixture<C12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C12Component]
    });
    fixture = TestBed.createComponent(C12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
