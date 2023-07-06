import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C87Component } from './c87.component';

describe('C87Component', () => {
  let component: C87Component;
  let fixture: ComponentFixture<C87Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C87Component]
    });
    fixture = TestBed.createComponent(C87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
