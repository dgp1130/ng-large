import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C891Component } from './c891.component';

describe('C891Component', () => {
  let component: C891Component;
  let fixture: ComponentFixture<C891Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C891Component]
    });
    fixture = TestBed.createComponent(C891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
