import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C937Component } from './c937.component';

describe('C937Component', () => {
  let component: C937Component;
  let fixture: ComponentFixture<C937Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C937Component]
    });
    fixture = TestBed.createComponent(C937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
